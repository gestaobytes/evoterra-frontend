export default function ({ $auth }) {
  if (!$auth.loggedIn) {
    return
  }

  const user = $auth.user
}
