import { Link, Outlet } from "react-router-dom"


const ShowNav = () => {
    const showNavBAr=[
        {
            name:'Home',
            path:'/'
        },
        {
            name:'Help',
            path:'/help/'
        },
        {
            name:'tooscco',
            path:'/tooscco'
        },
    ]

    const ShowLog=[
        {
            name:'About',
            path:'/about'
        },
        {
            name:'Logout',
            path:'/login'
        },
    ]
  return (
    <div>
    <div className="flex gap-10 ps-10 p-5 justify-between border shadow-lg">
      <ul className="flex gap-10">
        {
            showNavBAr.map((link)=>(
                <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                </li>
            ))
        }
      </ul>
      <ul className="flex gap-10">
        {
            ShowLog.map((link)=>(
                <li key={link.name}>
                    <Link to={link.path}>{link.name}</Link>
                </li>
            ))
        }
      </ul>
    </div>
      <Outlet />
    </div>
  )
}

export default ShowNav
