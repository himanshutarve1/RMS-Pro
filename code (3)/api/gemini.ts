// api/gemini.ts
// Simple test API to confirm server functions are deployed.
// This does NOT call Vertex. It's only to test the function exists.
export default function handler(req: any, res: any) {
  res.setHeader('content-type','application/json')
  res.status(200).send(JSON.stringify({
    ok: true,
    method: req.method,
    message: "Server function is working — replace this with your real Vertex code later."
  }))
}
