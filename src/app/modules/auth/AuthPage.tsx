/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react'
import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { Registration } from './components/Registration'
import { ForgotPassword } from './components/ForgotPassword'
import { Login } from './components/Login'
import { toAbsoluteUrl } from '../../../_metronic/helpers'
import TheaterDetails from './components/TheaterDetails'
import OtpVerification from './components/OtpVerify'
import { PasswordReset } from './components/PasswordReset'

const AuthLayout = () => {
  useEffect(() => {
    document.body.style.backgroundImage = 'none'
    return () => { }
  }, [])

  return (
    <div
      className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
      style={{
        backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/sketchy-1/14.png')})`,
      }}
    >
      {/* begin::Content */}
      <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
        {/* begin::Logo */}

        {/* end::Logo */}
        {/* begin::Wrapper */}
        <div className='w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto'>
          <Outlet />
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
      {/* begin::Footer */}
      <div className='d-flex flex-center flex-column-auto p-10'>
        <div className='d-flex align-items-center fw-semibold fs-6'>
          <a href='#' className='text-muted text-hover-primary px-2'>
            About
          </a>

          <a href='#' className='text-muted text-hover-primary px-2'>
            Contact
          </a>

          <a href='#' className='text-muted text-hover-primary px-2'>
            Contact Us
          </a>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  )
}

const AuthPage = () => {
  const auth = localStorage.getItem('auth');
  const { role } = auth ? (JSON.parse(auth)) : { role: null }
  if (auth && role ) {
    return (
      <Navigate to='/dashboard' />
    )
  } else {
    return (
      <Routes>
        <Route path='theater-details' element={<TheaterDetails />} />
        <Route element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='registration' element={<Registration />} />

          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='otp-verify' element={<OtpVerification />} />
          <Route path='password-reset' element={<PasswordReset />} />
          <Route index element={<Login />} />
        </Route>
      </Routes>
    )
  }


}

export { AuthPage }
