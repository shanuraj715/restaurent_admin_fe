import { lazy, Suspense, useEffect } from 'react';

/// Components
import Index from "./jsx";
import { connect, useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from './jsx/components/loader/Loader';
// action
import { checkAutoLogin } from './services/AuthService';
import { isAuthenticated } from './store/selectors/AuthSelectors';
/// Style

import "./assets/css/style.css";
import "react-toastify/dist/ReactToastify.css";
import Shortcuts from './shortcuts';

const SignUp = lazy(() => import('./jsx/_pages/Registration'));
// const ForgotPassword = lazy(() => import('./jsx/_pages/ForgotPassword'));
const Login = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./jsx/pages/Login/Login')), 500);
  });
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}



function App(props) {
  const dispatch = useDispatch();
  const pageData = useSelector((state) => state.pageData);
  const appState = useSelector(state => state.appState)
  const navigate = useNavigate();
  useEffect(() => {
    checkAutoLogin(dispatch, navigate);

    // const handleKeyDown = (event) => {
    //   console.log("REGISTERIMG SHORTCUTS")
    //   const focusedElement = document.activeElement;
    //   const isInputFocused =
    //     focusedElement.tagName === 'INPUT' ||
    //     focusedElement.tagName === 'TEXTAREA';

    //   // If an input or textarea is focused, skip the shortcut logic
    //   if (isInputFocused) {
    //     return;
    //   }
    //   // Check if user has not pressed Ctrl or Command keys then return
    //   if (!event.ctrlKey && !event.metaKey) {
    //     return;
    //   }
    //   // shortcutsMapping(event)
    //   console.log("REGISTERIMG SHORTCUTS");
    // };

    // // Add event listener to the document
    // document.addEventListener('keydown', handleKeyDown);

    // // Cleanup the event listener on component unmount
    // return () => {
    //   document.removeEventListener('keydown', handleKeyDown);
    // };
  }, []);

  useEffect(() => {
    document.title = `${pageData.pageTitle} | ${import.meta.env.VITE_SHORT_APP_NAME}`;
  }, [pageData.pageTitle])

  useEffect(() => {
    // console.log(props.isAuthenticated)
    if (props.isAuthenticated) {
      navigate('/dashboard')
    }
    else {
      navigate('/login')
    }
  }, [props?.isAuthenticated])



  let routeblog = (

    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/page-register' element={<SignUp />} />
      {/* <Route path='/page-forgot-password' element={<ForgotPassword />} /> */}
    </Routes>
  );
  return <>
    {/* <Shortcuts /> */}
    {props.isAuthenticated ? <>
      <Suspense fallback={
        <div id="preloader">
          <div className="sk-three-bounce">
            <div className="sk-child sk-bounce1"></div>
            <div className="sk-child sk-bounce2"></div>
            <div className="sk-child sk-bounce3"></div>
          </div>
        </div>
      }
      >
        <Index />
      </Suspense>
    </> :
      <div className="vh-100">
        <Suspense fallback={
          <div id="preloader">
            <div className="sk-three-bounce">
              <div className="sk-child sk-bounce1"></div>
              <div className="sk-child sk-bounce2"></div>
              <div className="sk-child sk-bounce3"></div>
            </div>
          </div>
        }
        >
          {routeblog}
        </Suspense>
      </div>
    }
    {appState.loader && <Loader />}
    <ToastContainer position='top-right' closeOnClick={true} autoClose={3000} pauseOnHover={true} />
  </>
};


const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

//export default connect((mapStateToProps)(App)); 
export default withRouter(connect(mapStateToProps)(App)); 