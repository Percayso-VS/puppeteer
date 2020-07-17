<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [puppeteer](./puppeteer.md) &gt; [Protocol](./puppeteer.protocol.md) &gt; [Page](./puppeteer.protocol.page.md) &gt; [ReloadRequest](./puppeteer.protocol.page.reloadrequest.md)

## Protocol.Page.ReloadRequest interface

<b>Signature:</b>

```typescript
export interface ReloadRequest 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [ignoreCache](./puppeteer.protocol.page.reloadrequest.ignorecache.md) | boolean | If true, browser cache is ignored (as if the user pressed Shift+refresh). |
|  [scriptToEvaluateOnLoad](./puppeteer.protocol.page.reloadrequest.scripttoevaluateonload.md) | string | If set, the script will be injected into all frames of the inspected page after reload. Argument will be ignored if reloading dataURL origin. |
