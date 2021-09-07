/* export default ({ $supabase, redirect, session, storage, context, supabase, localStorage, window }) => {
	if (!$supabase.auth.user()) {
		return redirect('/sign-in')
	}
	
	console.log(window.localStorage.getItem('ok')) 

}
*/
export default function({ redirect }) {

	// Do not run on server
	if (process.server) {
	  return
	}
  
	const user = localStorage.getItem('supabase.auth.token')
	
  
/*	if (user) {
	  if (route.path === '/sign-in') {
		return redirect('/')
	  }
	  return
	}
*/
  
	if (!user) {
	  return redirect('/sign-in')
	}
  }