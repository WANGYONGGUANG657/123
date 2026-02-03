  export default function handler(req, res) {
      const amapKey = process.env.AMAP_API_KEY || '';
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET');
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json({
          amapKey: amapKey,
          amapVersion: '2.0',
          amapPlugins: 'AMap.Scale,AMap.ToolBar'
      });
  }
