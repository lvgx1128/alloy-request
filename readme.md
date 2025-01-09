# alloy-request

alloy-request 基于`axios`和`ahooks的useRequest`封装的 react 请求库

### **安装**

alloy-request 依赖 `axios` 和 `ahooks的useRequest`，使用前请先安装 3.0 版本以上的[ahooks](https://ahooks.js.org/zh-CN/hooks/use-request/index)和[axios](https://axios-http.com/docs/intro)

```sh
npm install alloy-request
yarn add alloy-request
pnpm install alloy-request
```

### 初始化实例 **API**

| 参数     | 描述                 | 类型                                              | 是否必填 | 默认值 |
| -------- | -------------------- | ------------------------------------------------- | -------- | ------ |
| request  | 实例 request 拦截器  | `(req: AxiosRequestConfig) => AxiosRequestConfig` | `否`     | `--`   |
| response | 实例 response 拦截器 | `(req: AxiosResponse) => AxiosResponse`           | `否`     | `--`   |

### demo

```tsx
import { initInstance } from 'alloy-request'

initInstance()
```

```tsx
import { initInstance } from 'alloy-request'

initInstance(
  (request) => {
    request.baseURL = 'http://127.0.0.1:80'
    return request
  },
  (response) => {
    return response.data
  }
)
```

### GET **API**

| 参数   | 描述           | 类型     | 是否必填 | 默认值 |
| ------ | -------------- | -------- | -------- | ------ |
| url    | 请求的地址     | `string` | `是`     | `--`   |
| data   | 请求的数据     | `object` | `否`     | `--`   |
| config | 请求的配置信息 | `object` | `否`     | `--`   |

### demo

```tsx
import { get } from 'alloy-request';

async function getData() {
  try {
    const res = await get('api-url', { query: 'keyword' }, {})
    console.log(res)
  } catch(error){}
}
```

### POST **API**

| 参数   | 描述           | 类型     | 是否必填 | 默认值 |
| ------ | -------------- | -------- | -------- | ------ |
| url    | 请求的地址     | `string` | `是`     | `--`   |
| data   | 请求的数据     | `object` | `否`     | `--`   |
| config | 请求的配置信息 | `object` | `否`     | `--`   |

### demo

```tsx
import { post } from 'alloy-request';

async function getData() {
  try {
    const res = await post('api-url', { name: 'name' }, {})
  } catch(error){}
}
```

### useAxios **API**

基于 ahooks useRequest 封装的参数请求 在 hooks 中使用 使用方法参照[useRequest](https://ahooks.js.org/zh-CN/hooks/use-request/index)

| 参数 | 描述 | 类型 | 是否必填 | 默认值 |
| --- | --- | --- | --- | --- |
| url | 请求的地址 | `string` | `是` | `--` |
| service | useRequest server | `(...args: TParams) => Promise<TData>` | `是` | `--` |
| options | useRequest [options](https://ahooks.js.org/zh-CN/hooks/use-request/basic#options) | `object` | `否` | `--` |

### demo

```tsx
import { useAxios } from 'alloy-request';

const { runAsync } =  useAxios('/getDemo', () => ({
  method: 'post',
  payload: { name: '' },
  }), {
  manual: true,
    formatResult: (res) => {
      return res
    },
    onSuccess: (res) => {
      console.log(res)
    }
 })
```
