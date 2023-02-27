declare module "git-init" {
  function gitInit(path: string, callback?: (err: Error) => void): Promise<void>;
  export = gitInit;
}
