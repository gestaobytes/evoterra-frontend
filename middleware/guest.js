export default function ({$auth, redirect }) {
  if ($auth.loggedIn == false) {
    return redirect("/login");
  }
}
