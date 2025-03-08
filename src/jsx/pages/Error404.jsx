import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updatePageTitle } from '../../store/actions/PageData'
import CONSTANTS from '../../constants'

const Error404 = () => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(updatePageTitle(CONSTANTS.PAGE_TITLES.page404))
  }, [])

  return (
    <div className='py-4'>
      <div className='container'>
        <div className='row justify-content-center h-100 align-items-center'>
          <div className='col-md-8'>
            <div className='form-input-content text-center error-page'>
              <h1 className='error-text fw-bold'>404</h1>
              <h4>
                <i className='fa fa-exclamation-triangle text-warning' /> The
                page you were looking for is not found!
              </h4>
              <p>
                You may have mistyped the address or the page may have moved.
              </p>
              <div>
                <Link className='btn btn-primary' to='/dashboard'>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error404
