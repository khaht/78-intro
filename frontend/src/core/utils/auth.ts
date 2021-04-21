/**
 * Check Authentication
 *
 * @param to
 * @param from
 * @param next
 */
export async function authMiddleware(to: any, from: any, next: any) {
  return next();
}

export interface TokenInterceptorOptions {
  header?: string; // Authorization
  token?: string;
  headerFormatter?: (token: string) => string; // () => `Bearer ${token}`
  getToken?: () => string | Promise<string>;
}

function getToken(options: any) {
  if (options.token) {
    return Promise.resolve(options.token);
  }

  const token = options.getToken();
  if (typeof token !== 'object' || !token.then) {
    return Promise.resolve(token);
  }

  return token;
}

export function tokenInterceptor(options: TokenInterceptorOptions) {
  const header = options.header || 'Authorization';
  const headerFormatter =
    options.headerFormatter ||
    function defaultHeaderFormatter(token: string) {
      return `Bearer ${token}`;
    };

  return function interceptRequest(config: any) {
    const requestConfig = config;
    return getToken(options).then((token: string) => {
      requestConfig.headers[header] = headerFormatter(token);
      return config;
    });
  };
}

export function phoneValidator(rule: any, value: string, callback: any) {
  const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i;
  const check = regex.test(value);
  if (!check) {
    callback(new Error('Không đúng định dạng'));
  } else {
    callback();
  }
}
