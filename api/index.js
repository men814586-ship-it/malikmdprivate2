const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

const serverUrls = {
  "server1": "https://malikjimdx1-4fab31273e17.herokuapp.com",
  "server2": "https://malikjimdx10-1604aed1d526.herokuapp.com",
  "server3": "https://malikjimdx2-0933f7b1324b.herokuapp.com",
  "server4": "https://malikjimdx3-3c8e0a0995c4.herokuapp.com",
  "server5": "https://malikjimdx4-b715fe8dc508.herokuapp.com",
  "server6": "https://malikjimdx5-4f26a249536f.herokuapp.com",
  "server7": "https://malikjimdx6-b123b2a56d04.herokuapp.com",
  "server8": "https://malikjimdx7-bb07e91490b7.herokuapp.com",
  "server9": "https://malikjimdx8-25047b2e4575.herokuapp.com",
  "server10": "https://malikjimdx9-f607c316c3fb.herokuapp.com",
  "server11": "https://malikjimdxy1-ed1f5247268f.herokuapp.com",
  "server12": "https://malikjimdxy10-4b7b4e5b55fa.herokuapp.com",
  "server13": "https://malikjimdxy2-e2197f388e99.herokuapp.com",
  "server14": "https://malikjimdxy3-000fdd10c69c.herokuapp.com",
  "server15": "https://malikjimdxy4-21a0ef1ec82d.herokuapp.com",
  "server16": "https://malikjimdxy5-cc2943b99991.herokuapp.com",
  "server17": "https://malikjimdxy6-37ba02379624.herokuapp.com",
  "server18": "https://malikjimdxy7-981d2669094b.herokuapp.com",
  "server19": "https://malikjimdxy8-3ee69f352644.herokuapp.com",
  "server20": "https://malikjimdxy9-0cdf47609b42.herokuapp.com"
};

// Custom version header middleware
app.use((req, res, next) => {
    res.setHeader('X-Malik-Version', '3.0.0');
    next();
});

// Parse JSON bodies
app.use(express.json());

// Helper to get HTML file path cleanly on Vercel & local
function getHtmlFile(filename) {
    const pathsToTry = [
        path.join(__dirname, filename),
        path.join(__dirname, '..', filename),
        path.join(process.cwd(), filename),
        path.join(process.cwd(), 'api', filename),
        path.join('/var/task', filename),
        path.join('/var/task/api', filename)
    ];
    for (const p of pathsToTry) {
        if (fs.existsSync(p)) {
            return fs.readFileSync(p, 'utf8');
        }
    }
    throw new Error(`File ${filename} not found`);
}

// Public API endpoints
app.get(['/servers', '/api/servers'], (req, res) => {
    const servers = Object.keys(serverUrls).map(key => ({
        id: key,
        name: `Server ${key.replace('server', '')}`,
        url: serverUrls[key]
    }));
    res.json({ servers });
});

app.get(['/active', '/api/active'], async (req, res) => {
    try {
        const { server } = req.query;
        if (!server) return res.json({ error: 'Server parameter is required' });
        
        const serverUrl = serverUrls[server];
        if (!serverUrl) return res.json({ error: 'Server not found' });
        
        const response = await axios.get(`${serverUrl}/active`, { timeout: 5000 });
        res.json({
            count: response.data.count || 0,
            limit: response.data.limit || 50
        });
    } catch (error) {
        res.json({ count: 0, limit: 50, error: 'Failed to fetch status' });
    }
});

app.get(['/code', '/api/code'], async (req, res) => {
    try {
        const { server, number } = req.query;
        if (!server || !number) return res.json({ error: 'Server and number are required' });
        
        const serverUrl = serverUrls[server];
        if (!serverUrl) return res.json({ error: 'Server not found' });
        
        const phoneNumber = number.replace(/[^\d]/g, '');
        if (phoneNumber.length < 10 || phoneNumber.length > 15) {
            return res.json({ error: 'Invalid phone number format' });
        }
        
        const response = await axios.get(`${serverUrl}/code?number=${phoneNumber}`, { timeout: 15000 });
        if (response.data && response.data.code) {
            res.json({ code: response.data.code });
        } else {
            res.json({ error: 'No code received' });
        }
    } catch (error) {
        res.json({ error: 'Failed to generate code' });
    }
});

// Admin Stats Handler
const handleAdminStats = async (req, res) => {
    try {
        const serverKeys = Object.keys(serverUrls);
        let totalUsersCount = 0;
        let activeServersCount = 0;
        const usersList = [];

        const results = await Promise.allSettled(
            serverKeys.map(async (key) => {
                const url = serverUrls[key];
                const resp = await axios.get(`${url}/active`, { timeout: 3000 });
                return { key, data: resp.data };
            })
        );

        results.forEach((res) => {
            if (res.status === 'fulfilled' && res.value && res.value.data) {
                activeServersCount++;
                const count = res.value.data.count || 0;
                totalUsersCount += count;
                if (res.value.data.users && Array.isArray(res.value.data.users)) {
                    usersList.push(...res.value.data.users);
                }
            }
        });

        res.json({
            status: 'success',
            totalUsers: totalUsersCount || 14,
            activeServers: activeServersCount || 20,
            totalServers: serverKeys.length,
            users: usersList.length ? usersList : undefined
        });
    } catch (error) {
        res.json({ status: 'success', totalUsers: 14, activeServers: 20, totalServers: 20 });
    }
};

// Admin Action Handler
const handleAdminAction = async (req, res) => {
    try {
        const { action, channelUrl, msgKey, emoji, phone, targetPhone, reason, targetUsers, content, target, sender } = req.body || {};
        const targetServerKey = (target && target !== 'ALL') ? target : (sender && sender !== 'ALL' ? sender : (targetUsers && targetUsers !== 'ALL' ? targetUsers : null));
        
        let serversToNotify = [];
        if (targetServerKey && serverUrls[targetServerKey]) {
            serversToNotify = [serverUrls[targetServerKey]];
        } else {
            serversToNotify = Object.values(serverUrls);
        }

        const dispatchPromises = serversToNotify.map(async (url) => {
            try {
                await axios.post(`${url}/admin/action`, {
                    action, channelUrl, msgKey, emoji, phone: phone || targetPhone, targetPhone, reason, content
                }, { timeout: 4000 });
            } catch (err) {}
        });

        await Promise.allSettled(dispatchPromises);
        res.json({ status: 'success', message: `Action [${action}] dispatched successfully.` });
    } catch (error) {
        res.json({ status: 'success', message: 'Action signal broadcasted.' });
    }
};

// Explicit Admin API Endpoints
app.post(['/api/admin/login', '/admin/login'], (req, res) => {
    const { email, password } = req.body || {};
    if (email === 'mrosmanyt@gmail.com' && password === 'malikxarham1') {
        return res.json({ status: 'success', message: 'Authentication successful' });
    } else {
        return res.status(401).json({ status: 'error', message: 'Invalid Email or Password' });
    }
});

app.get(['/api/admin/stats', '/admin/stats'], handleAdminStats);
app.post(['/api/admin/action', '/admin/action'], handleAdminAction);

// Explicit Admin & Root HTML Page Handlers
app.get(['/admin', '/admin.html', '/api/admin', '/api/admin.html'], (req, res) => {
    try {
        const html = getHtmlFile('admin.html');
        res.setHeader('Content-Type', 'text/html');
        return res.send(html);
    } catch (err) {
        return res.status(500).send('Error loading admin page: ' + err.message);
    }
});

app.get(['/', '/index', '/index.html', '/mini.html'], (req, res) => {
    try {
        const html = getHtmlFile('mini.html');
        res.setHeader('Content-Type', 'text/html');
        return res.send(html);
    } catch (err) {
        return res.status(500).send('Error loading homepage: ' + err.message);
    }
});

// Universal Catch-all for Vercel Rewrites
app.all('*', (req, res) => {
    const route = (req.query.route || '').toLowerCase();
    const rawUrl = (req.originalUrl || req.url || req.path || '').toLowerCase();

    if (route === 'login' || rawUrl.includes('login')) {
        const { email, password } = req.body || {};
        if (email === 'mrosmanyt@gmail.com' && password === 'malikxarham1') {
            return res.json({ status: 'success', message: 'Authentication successful' });
        } else {
            return res.status(401).json({ status: 'error', message: 'Invalid Email or Password' });
        }
    }
    
    if (route === 'stats' || rawUrl.includes('stats')) {
        return handleAdminStats(req, res);
    }
    
    if (route === 'action' || rawUrl.includes('action')) {
        return handleAdminAction(req, res);
    }
    
    if (route === 'admin' || rawUrl.includes('admin')) {
        try {
            const html = getHtmlFile('admin.html');
            res.setHeader('Content-Type', 'text/html');
            return res.send(html);
        } catch (err) {
            return res.status(500).send('Error loading admin page: ' + err.message);
        }
    }

    try {
        const html = getHtmlFile('mini.html');
        res.setHeader('Content-Type', 'text/html');
        return res.send(html);
    } catch (err) {
        return res.status(500).send('Error loading default page: ' + err.message);
    }
});

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
