export default function (context) {
  const { route, store, redirect, params } = context;

  console.log(params, route, store, redirect);
}
