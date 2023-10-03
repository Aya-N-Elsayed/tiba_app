

export const Navbar = () => {




  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <form className="search w-75">
          <img classNameName="w-100 " src="/images/search.svg" alt="search"/>   
            <input className="form-control me-2" type="search" placeholder="  ابحث باسم المريض أو الجراح ... " aria-label="Search" />
            
                      
        </form>
        
          <ul className="navbar-nav  d-flex align-items-center  me-auto p-0">
            
          <li className="nav-item">
            <button type="button" className="btn notification d-flex justify-content-center align-items-center"><img classNameName="w-100 " src="/images/notification.svg" alt="notifications"/></button>
          </li>
            
           <li className="nav-item me-3">
            <button type="button" className="btn user d-flex justify-content-center align-items-center"><img classNameName="w-100 " src="/images/userimage.jpeg" alt="user image"/></button>
            </li>  



        </ul>

      </div>
    </div>
  </nav>
  )
}
