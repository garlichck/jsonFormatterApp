import { useEffect, useMemo, useRef, useState } from 'react'

const LS_KEY_INPUT = 'jf.input'
const LS_KEY_OUTPUT = 'jf.output'
const DEFAULT_SAMPLE = `{
  "name": "Jane Doe",
  "age": 28,
  "skills": ["react", "sql", "devops"],
  "active": true,
  "profile": { "github": "janedoe", "stars": 1234 },
  "notes": "Paste JSON here and click Format"
}`

export default function App() {
  const [input, setInput] = useState(localStorage.getItem(LS_KEY_INPUT) ?? DEFAULT_SAMPLE)
  const [output, setOutput] = useState(localStorage.getItem(LS_KEY_OUTPUT) ?? '')
  const [indent, setIndent] = useState(2)
  const [status, setStatus] = useState({ ok: true, msg: 'Ready' })
  const [lineCount, setLineCount] = useState(0)
  const inputRef = useRef(null)
  const outputRef = useRef(null)

  // Persist between refreshes
  useEffect(() => { localStorage.setItem(LS_KEY_INPUT, input) }, [input])
  useEffect(() => { localStorage.setItem(LS_KEY_OUTPUT, output) }, [output])

  // Live line count for input
  useEffect(() => {
    setLineCount((input.match(/\n/g) || []).length + 1)
  }, [input])

  const inputIsEmpty = useMemo(() => input.trim().length === 0, [input])

  const validateJSON = () => {
    try {
      JSON.parse(input)
      setStatus({ ok: true, msg: 'Valid JSON' })
      return true
    } catch (e) {
      setStatus({ ok: false, msg: e.message })
      return false
    }
  }

  const formatJSON = () => {
    try {
      const obj = JSON.parse(input)
      const pretty = JSON.stringify(obj, null, Number(indent))
      setOutput(pretty)
      setStatus({ ok: true, msg: 'Formatted' })
    } catch (e) {
      setStatus({ ok: false, msg: e.message })
    }
  }

  const minifyJSON = () => {
    try {
      const obj = JSON.parse(input)
      const min = JSON.stringify(obj)
      setOutput(min)
      setStatus({ ok: true, msg: 'Minified' })
    } catch (e) {
      setStatus({ ok: false, msg: e.message })
    }
  }

  const copyOutput = async () => {
    if (!output) return
    try {
      await navigator.clipboard.writeText(output)
      setStatus({ ok: true, msg: 'Copied to clipboard' })
    } catch {
      setStatus({ ok: false, msg: 'Clipboard unavailable' })
    }
  }

  const downloadOutput = () => {
    if (!output) return
    const blob = new Blob([output], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'formatted.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const clearAll = () => {
    setInput('')
    setOutput('')
    setStatus({ ok: true, msg: 'Cleared' })
    inputRef.current?.focus()
  }

  const loadSample = () => setInput(DEFAULT_SAMPLE)

  // Drag & drop JSON files into the input area
  const onDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer?.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setInput(String(reader.result || ''))
    reader.readAsText(file)
  }

  const onPasteBeautify = async (e) => {
    // Optional: if paste contains JSON, format automatically
    // (Non-intrusive: we only parse if it looks like JSON quickly)
    setTimeout(() => {
      try {
        const text = inputRef.current?.value ?? ''
        const trimmed = text.trim()
        if ((trimmed.startsWith('{') && trimmed.endsWith('}')) ||
          (trimmed.startsWith('[') && trimmed.endsWith(']'))) {
          JSON.parse(trimmed) // throws if invalid
          // auto format into output to be helpful
          setOutput(JSON.stringify(JSON.parse(trimmed), null, Number(indent)))
          setStatus({ ok: true, msg: 'Auto-formatted pasted JSON' })
        }
      } catch { }
    }, 0)
  }

  const onFileSelect = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setInput(String(reader.result || ''))
    reader.readAsText(file)
    e.target.value = ''
  }

  return (
    <div className="app">
      <div className="header">
        <div className="brand">
          <h1 style={{ margin: 0 }}>JSON Formatter</h1>
          <span className="badge">All processing is local • No data uploaded</span>
        </div>
        <div className="toolbar">
          <label className="badge" htmlFor="indent">Indent:</label>
          <select id="indent" value={indent} onChange={(e) => setIndent(Number(e.target.value))} aria-label="Indentation spaces">
            <option value={2}>2</option>
            <option value={4}>4</option>
            <option value={6}>6</option>
            <option value={8}>8</option>
          </select>
          <input type="file" accept=".json,.txt,.log,application/json" onChange={onFileSelect} title="Open file" />
        </div>
      </div>

      <div className="grid">
        <section className="card">
          <h3 style={{ marginTop: 0 }}>Input JSON</h3>
          <div
            className="textarea-wrap"
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onPaste={onPasteBeautify}
              spellCheck="false"
              placeholder='Paste JSON here…'
              aria-label="Input JSON"
            />
          </div>
          <div className="hint">{lineCount} lines • Drop a .json file here</div>

          <div className="toolbar">
            <button className="btn-primary" onClick={formatJSON} disabled={inputIsEmpty}>Format</button>
            <button className="btn-primary" onClick={minifyJSON} disabled={inputIsEmpty}>Minify</button>
            <button className="btn-accent" onClick={validateJSON} disabled={inputIsEmpty}>Validate</button>
            <button onClick={loadSample}>Sample</button>
            <button className="btn-danger" onClick={clearAll} disabled={inputIsEmpty}>Clear</button>
          </div>

          <div className={`status ${status.ok ? 'ok' : 'err'}`}>
            {status.ok ? '✅' : '⛔'} {status.msg}
          </div>
        </section>

        <section className="card">
          <h3 style={{ marginTop: 0 }}>Output</h3>
          <textarea
            ref={outputRef}
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            spellCheck="false"
            placeholder='Your formatted / minified JSON will appear here…'
            aria-label="Output JSON"
          />
          <div className="toolbar">
            <button onClick={copyOutput} disabled={!output}>Copy</button>
            <button onClick={downloadOutput} disabled={!output}>Download .json</button>
          </div>
          <div className="footer">
            <span>Tip: Use <code>Ctrl/Cmd + A</code> then <code>Ctrl/Cmd + C</code> to quickly copy.</span>
          </div>
        </section>
      </div>
    </div>
  )
}
