
import { Outlet } from "react-router-dom"

const IdentityLayout = () => {
    return(
        <>
            <div className="login-register-page-wrapper edu-section-gap bg-color-white">
                <div className="container checkout-page-style">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default IdentityLayout;