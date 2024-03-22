jest.mock('@omh/react-native-auth-google', () => ({
  multiply: (a: number, b: number) =>
    new Promise<number>(resolve => resolve(a * b)),
}));
