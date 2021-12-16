let promise = fetch('https://www.boredapi.com/api/activity', {
    method: "GET", // POST, PUT, DELETE, etc.
    headers: {
      // значение этого заголовка обычно ставится автоматически,
      // в зависимости от тела запроса
      "Content-Type": "text/plain;charset=UTF-8"
    },
    body: undefined ,// string, FormData, Blob, BufferSource или URLSearchParams
    referrer: "about:client", // или "" для того, чтобы не послать заголовок Referer,
    // или URL с текущего источника
    referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
    mode: "cors", // same-origin, no-cors
    credentials: "same-origin", // omit, include
    cache: "default", // no-store, reload, no-cache, force-cache или only-if-cached
    redirect: "follow", // manual, error
    integrity: "", // контрольная сумма, например "sha256-abcdef1234567890"
    keepalive: true, // true
    signal: undefined, // AbortController, чтобы прервать запрос
    window: window // null
  })
    .then(e => e.json())
    .then(e => console.log(e))

  let hyper = fetch('exs.html')
    .then(e => e.text())
    .then(e=>{
        return e.split('<h1>')[1].split('</h1>')[0]
    })
    .then(e=>{
        console.log(e)
    })
