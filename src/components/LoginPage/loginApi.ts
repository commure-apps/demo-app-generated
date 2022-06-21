
export interface LoginPayload {
  username: string;
  password: string;
  remember: boolean;
}

export interface LoginConfig {
  apiUrl: string;
  redirectPath: string;
}

export async function loginRequest(data: LoginPayload, config: LoginConfig) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        isAuthenticated: true,
      });
    }, 2000);
  });
}
