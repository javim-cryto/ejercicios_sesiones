async deployAuthForCurrentDir() {
  const dotCubeCloud = await this.loadDotCubeCloud();
  if (dotCubeCloud.url && dotCubeCloud.deploymentId) {
   const deployAuth = await this.deployAuth(dotCubeCloud.url);
   if (!deployAuth[dotCubeCloud.url]) {
    throw new Error(`Provided token isn't for ${dotCubeCloud.url}`);
   }
   return {
    ...deployAuth[dotCubeCloud.url],
    url: dotCubeCloud.url,
    deploymentId: dotCubeCloud.deploymentId
   };
  }
  const auth = await this.deployAuth();
  let url = Object.keys(auth)[0];
  if (Object.keys(auth).length > 1) {
   url = (await inquirer.prompt([{
    type: 'list',
    name: 'url',
    message: 'Please select an organization',
    choices: Object.keys(auth)
   }])).url;
  }
  const authToken = auth[url];
  const deployments = await this.cloudReq({
   url: () => 'build/deploy/deployments',
   method: 'GET',
   auth: { ...authToken, url }
  });
  if (!Array.isArray(deployments)) {
   throw new Error(deployments.toString());
  }
  if (!deployments.length) {
   // eslint-disable-next-line no-throw-literal
   throw `${url} doesn't have any managed deployments. Please create one.`;
  }
  const { deployment } = await inquirer.prompt([{
   type: 'list',
   name: 'deployment',
   message: 'Please select a deployment to deploy to',
   choices: deployments
  }]);
  const deploymentId = deployments.find(d => d.name === deployment).id;
  await this.writeDotCubeCloud({
   url,
   deploymentId
  });
  return {
   ...authToken,
   url,
   deploymentId
  };
 };