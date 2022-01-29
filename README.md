<div align="center">

# Oterlu API

</div>

An unofficial wrapper for the [Oterlu API](https://oterlu.com).

## Features

- Written in TypeScript
- Super fast ⚡
- Simple API

## Usage

Since the library only has two functions, usage is straightforward:

```ts
import { setApiKey, classifyContent } from 'oterlu-api';

// First, set your API key.
// - Note: Make sure this is set before you execute any functions relating to Oterlu, as you will get a "forbidden" error thrown.
setApiKey('my_api_key');

// Now that it's set, we can process messages:
const content = 'Classify me :)';
const response = await classifyContent(content);

if (response.isFlagged) console.log('Message is flagged!');
```

## Support

If support is needed, please submit an [issue](https://github.com/axisiscool/oterlu-api/issues/new).
