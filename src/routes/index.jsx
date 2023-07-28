import React from "react"
import { Navigate } from "react-router-dom"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// // Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"

// // Profile
import UserProfile from "../pages/Authentication/user-profile"
import EmailVerification from "../pages/AuthenticationInner/auth-email-verification"
import EmailVerification2 from "../pages/AuthenticationInner/auth-email-verification-2"
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen"
import LockScreen2 from "../pages/AuthenticationInner/auth-lock-screen-2"
import TwostepVerification from "../pages/AuthenticationInner/auth-two-step-verification"
import TwostepVerification2 from "../pages/AuthenticationInner/auth-two-step-verification-2"
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword"
import ForgetPwd2 from "../pages/AuthenticationInner/ForgetPassword2"

// //  // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login"
import Login2 from "../pages/AuthenticationInner/Login2"
import ConfirmMail from "../pages/AuthenticationInner/page-confirm-mail"
import ConfirmMail2 from "../pages/AuthenticationInner/page-confirm-mail-2"
import Recoverpw from "../pages/AuthenticationInner/Recoverpw"
import Recoverpw2 from "../pages/AuthenticationInner/Recoverpw2"
import Register1 from "../pages/AuthenticationInner/Register"
import Register2 from "../pages/AuthenticationInner/Register2"
import BlogDetails from "../pages/Blog/BlogDetails"
import BlogGrid from "../pages/Blog/BlogGrid/index"

// //Blog
import BlogList from "../pages/Blog/BlogList/index"
import Bots from "../pages/Bots"
import BotsSettings from "../pages/Bots/BotsSettings"

// Pages Calendar
import Calendar from "../pages/Calendar/index"

// // Charts
import ChartApex from "../pages/Charts/Apexcharts"
import ChartistChart from "../pages/Charts/ChartistChart"
import ChartjsChart from "../pages/Charts/ChartjsChart"
import ChartsKnob from "../pages/Charts/charts-knob"
import EChart from "../pages/Charts/EChart"
import ReCharts from "../pages/Charts/ReCharts"
import SparklineChart from "../pages/Charts/SparklineChart"

// Pages Component
import Chat from "../pages/Chat/Chat"
import Chats from "../pages/Chats"
import ContactsList from "../pages/Contacts/ContactList/contacts-list"

// //Contacts
import ContactsGrid from "../pages/Contacts/contacts-grid"
import ContactsProfile from "../pages/Contacts/ContactsProfile/contacts-profile"
import CryptoBuySell from "../pages/Crypto/crypto-buy-sell"
import CryptoExchange from "../pages/Crypto/crypto-exchange"
import CryptoKYCApplication from "../pages/Crypto/crypto-kyc-application"
import CryptoLending from "../pages/Crypto/crypto-lending"
import CryptoIcoLanding from "../pages/Crypto/CryptoIcoLanding/index"
import CryptoOrders from "../pages/Crypto/CryptoOrders/crypto-orders"

// //Crypto
import CryptoWallet from "../pages/Crypto/CryptoWallet/crypto-wallet"
import CustomMailing from "../pages/CustomMailing"
import CustomMailingSettings from "../pages/CustomMailing/CustomMailingSettings"

// // Dashboard
import Dashboard from "../pages/Dashboard"
import Blog from "../pages/Dashboard-Blog/index"
import DashboardCrypto from "../pages/Dashboard-crypto/index"
import DashboardSaas from "../pages/Dashboard-saas/index"
import DashboardJob from "../pages/DashboardJob/index"
import EcommerceAddProduct from "../pages/Ecommerce/EcommerceAddProduct"
import EcommerceCart from "../pages/Ecommerce/EcommerceCart"
import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout"
import EcommerceCustomers from "../pages/Ecommerce/EcommerceCustomers/index"
import EcommerceOrders from "../pages/Ecommerce/EcommerceOrders/index"
import EcommerceProductDetail from "../pages/Ecommerce/EcommerceProducts/EcommerceProductDetail"

// // //Ecommerce Pages
import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts/index"
import EcommerceShops from "../pages/Ecommerce/EcommerceShops/index"
import EmailBasicTemplte from "../pages/Email/email-basic-templte"

// //Email
import EmailInbox from "../pages/Email/email-inbox"
import EmailRead from "../pages/Email/email-read"
import EmailAlertTemplte from "../pages/Email/email-template-alert"
import EmailTemplateBilling from "../pages/Email/email-template-billing"
import EventsSettings from "../pages/EventsSettings"

// // File Manager
import FileManager from "../pages/FileManager/index"
import FormAdvanced from "../pages/Forms/FormAdvanced"
import FormEditors from "../pages/Forms/FormEditors"

// // Forms
import FormElements from "../pages/Forms/FormElements"
import FormLayouts from "../pages/Forms/FormLayouts"
import FormMask from "../pages/Forms/FormMask"
import FormRepeater from "../pages/Forms/FormRepeater"
import FormUpload from "../pages/Forms/FormUpload"
import FormValidations from "../pages/Forms/FormValidations"
import FormWizard from "../pages/Forms/FormWizard"
import Groups from "../pages/Groups"
import GroupsSettings from "../pages/Groups/GroupsSettings"
import ChatSetting from "../pages/Chats/ChatsSettings"

// //Icons
import IconBoxicons from "../pages/Icons/IconBoxicons"
import IconDripicons from "../pages/Icons/IconDripicons"
import IconFontawesome from "../pages/Icons/IconFontawesome"
import IconMaterialdesign from "../pages/Icons/IconMaterialdesign"
import InvoiceDetail from "../pages/Invoices/invoices-detail"

// //Invoices
import InvoicesList from "../pages/Invoices/invoices-list"
import ApplyJobs from "../pages/JobPages/ApplyJobs/index"
import CandidateList from "../pages/JobPages/CandidateList"
import CandidateOverview from "../pages/JobPages/CandidateOverview"
import JobCategories from "../pages/JobPages/JobCategories"
import JobDetails from "../pages/JobPages/JobDetails"

//Job
import JobGrid from "../pages/JobPages/JobGrid/index"
import JobList from "../pages/JobPages/JobList"

// // Maps
import MapsGoogle from "../pages/Maps/MapsGoogle"
import MapsLeaflet from "../pages/Maps/MapsLeaflet"
import MapsVector from "../pages/Maps/MapsVector"
import ProjectsOverview from "../pages/Projects/ProjectOverview/projects-overview"
import ProjectsCreate from "../pages/Projects/projects-create"

// // //Projects
import ProjectsGrid from "../pages/Projects/projects-grid"
import ProjectsList from "../pages/Projects/projects-list"
import Redirects from "../pages/Redirects"
import RedirectsSettings from "../pages/Redirects/RedirectsSettings"

// //Tables
import BasicTables from "../pages/Tables/BasicTables"
import DatatableTables from "../pages/Tables/DatatableTables"
import DragDropTables from "../pages/Tables/DragDropTables"
import DualListbox from "../pages/Tables/DualListbox"
import ResponsiveTables from "../pages/Tables/ResponsiveTables"
import TasksCreate from "../pages/Tasks/tasks-create"

// // //Tasks
import TasksList from "../pages/Tasks/tasks-list"

// //Ui
import UiAlert from "../pages/Ui/UiAlert"
import UiButtons from "../pages/Ui/UiButtons"
import UiCards from "../pages/Ui/UiCards"
import UiCarousel from "../pages/Ui/UiCarousel"
import UiColors from "../pages/Ui/UiColors"
import UiDropdown from "../pages/Ui/UiDropdown"

import UiGeneral from "../pages/Ui/UiGeneral"
import UiGrid from "../pages/Ui/UiGrid"
import UiImages from "../pages/Ui/UiImages"
import UiLightbox from "../pages/Ui/UiLightbox"
import UiModal from "../pages/Ui/UiModal"
import UiNotifications from "../pages/Ui/UINotifications"
import UiOffCanvas from "../pages/Ui/UiOffCanvas"

import UiPlaceholders from "../pages/Ui/UiPlaceholders"
import UiProgressbar from "../pages/Ui/UiProgressbar"
import UiRangeSlider from "../pages/Ui/UiRangeSlider"
import UiRating from "../pages/Ui/UiRating"
import UiSessionTimeout from "../pages/Ui/UiSessionTimeout"

import UiTabsAccordions from "../pages/Ui/UiTabsAccordions"
import UiToasts from "../pages/Ui/UiToast"
import UiTypography from "../pages/Ui/UiTypography"
import UiUtilities from "../pages/Ui/UiUtilities"
import UiVideo from "../pages/Ui/UiVideo"
import Pages404 from "../pages/Utility/pages-404"
import Pages500 from "../pages/Utility/pages-500"
import PagesComingsoon from "../pages/Utility/pages-comingsoon"
import PagesFaqs from "../pages/Utility/pages-faqs"
import PagesMaintenance from "../pages/Utility/pages-maintenance"
import PagesPricing from "../pages/Utility/pages-pricing"

// //Pages
import PagesStarter from "../pages/Utility/pages-starter"
import PagesTimeline from "../pages/Utility/pages-timeline"

// //TopUpBalance
import TopUpBalance from "../pages/TopUpBalance"

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/dashboard-saas", component: <DashboardSaas /> },
  { path: "/dashboard-crypto", component: <DashboardCrypto /> },
  { path: "/blog", component: <Blog /> },
  { path: "/dashboard-job", component: <DashboardJob /> },

  // //TopUpBalance
  { path: "/topup", component: <TopUpBalance /> },

  // //Bots
  { path: "/bots", component: <Bots /> },
  { path: "/bots/:id", component: <BotsSettings isNew={false} /> },
  { path: "/bots/new", component: <BotsSettings isNew={true} /> },

  // //Groups
  { path: "/groups", component: <Groups /> },
  {
    path: "/groups/:groupId/:eventId",
    component: <GroupsSettings />,
  },
  
  // //Events Settings
  { path: "/events-settings/:id", component: <EventsSettings /> },

  // //Redirects
  { path: "/redirects", component: <Redirects /> },
  { path: "/redirects/:id", component: <RedirectsSettings /> },

  // //Chats
  { path: "/chats", component: <Chats /> },
  {
    path: "/chats/:chatId/:eventId",
    component: <ChatSetting />,
  },
  
  // //Custom Mailing
  { path: "/custom-mailing", component: <CustomMailing /> },
  {
    path: "/custom-mailing/:id",
    component: <CustomMailingSettings />,
  },

  //   //Crypto
  { path: "/crypto-wallet", component: <CryptoWallet /> },
  { path: "/crypto-buy-sell", component: <CryptoBuySell /> },
  { path: "/crypto-exchange", component: <CryptoExchange /> },
  { path: "/crypto-lending", component: <CryptoLending /> },
  { path: "/crypto-orders", component: <CryptoOrders /> },
  {
    path: "/crypto-kyc-application",
    component: <CryptoKYCApplication />,
  },

  //chat
  { path: "/chat", component: <Chat /> },

  //File Manager
  { path: "/apps-filemanager", component: <FileManager /> },

  // //calendar
  { path: "/calendar", component: <Calendar /> },

  //   // //profile
  { path: "/profile", component: <UserProfile /> },

  //   //Ecommerce
  {
    path: "/ecommerce-product-detail/:id",
    component: <EcommerceProductDetail />,
  },
  { path: "/ecommerce-products", component: <EcommerceProducts /> },
  { path: "/ecommerce-orders", component: <EcommerceOrders /> },
  { path: "/ecommerce-customers", component: <EcommerceCustomers /> },
  { path: "/ecommerce-cart", component: <EcommerceCart /> },
  { path: "/ecommerce-checkout", component: <EcommerceCheckout /> },
  { path: "/ecommerce-shops", component: <EcommerceShops /> },
  {
    path: "/ecommerce-add-product",
    component: <EcommerceAddProduct />,
  },

  //   //Email
  { path: "/email-inbox", component: <EmailInbox /> },
  { path: "/email-read", component: <EmailRead /> },
  { path: "/email-template-basic", component: <EmailBasicTemplte /> },
  { path: "/email-template-alert", component: <EmailAlertTemplte /> },
  {
    path: "/email-template-billing",
    component: <EmailTemplateBilling />,
  },

  //   //Invoices
  { path: "/invoices-list", component: <InvoicesList /> },
  { path: "/invoices-detail", component: <InvoiceDetail /> },
  { path: "/invoices-detail/:id", component: <InvoiceDetail /> },

  //   // Tasks
  { path: "/tasks-list", component: <TasksList /> },
  { path: "/tasks-create", component: <TasksCreate /> },

  //   //Projects
  { path: "/projects-grid", component: <ProjectsGrid /> },
  { path: "/projects-list", component: <ProjectsList /> },
  { path: "/projects-overview", component: <ProjectsOverview /> },
  { path: "/projects-overview/:id", component: <ProjectsOverview /> },
  { path: "/projects-create", component: <ProjectsCreate /> },

  //   //Blog
  { path: "/blog-list", component: <BlogList /> },
  { path: "/blog-grid", component: <BlogGrid /> },
  { path: "/blog-details", component: <BlogDetails /> },

  { path: "/job-grid", component: <JobGrid /> },
  { path: "/job-details", component: <JobDetails /> },
  { path: "/job-categories", component: <JobCategories /> },
  { path: "/job-list", component: <JobList /> },
  { path: "/job-apply", component: <ApplyJobs /> },
  { path: "/candidate-list", component: <CandidateList /> },
  { path: "/candidate-overview", component: <CandidateOverview /> },

  // Contacts
  { path: "/contacts-grid", component: <ContactsGrid /> },
  { path: "/contacts-list", component: <ContactsList /> },
  { path: "/contacts-profile", component: <ContactsProfile /> },

  //   //Charts
  { path: "/apex-charts", component: <ChartApex /> },
  { path: "/chartist-charts", component: <ChartistChart /> },
  { path: "/chartjs-charts", component: <ChartjsChart /> },
  { path: "/e-charts", component: <EChart /> },
  { path: "/sparkline-charts", component: <SparklineChart /> },
  { path: "/charts-knob", component: <ChartsKnob /> },
  { path: "/re-charts", component: <ReCharts /> },

  //   // Icons
  { path: "/icons-boxicons", component: <IconBoxicons /> },
  { path: "/icons-dripicons", component: <IconDripicons /> },
  {
    path: "/icons-materialdesign",
    component: <IconMaterialdesign />,
  },
  { path: "/icons-fontawesome", component: <IconFontawesome /> },

  //   // Tables
  { path: "/tables-basic", component: <BasicTables /> },
  { path: "/tables-datatable", component: <DatatableTables /> },
  { path: "/tables-responsive", component: <ResponsiveTables /> },
  { path: "/tables-dragndrop", component: <DragDropTables /> },

  //   // Maps
  { path: "/maps-google", component: <MapsGoogle /> },
  { path: "/maps-vector", component: <MapsVector /> },
  { path: "/maps-leaflet", component: <MapsLeaflet /> },

  //   // Forms
  { path: "/form-elements", component: <FormElements /> },
  { path: "/form-layouts", component: <FormLayouts /> },
  { path: "/form-advanced", component: <FormAdvanced /> },
  { path: "/form-editors", component: <FormEditors /> },
  { path: "/form-mask", component: <FormMask /> },
  { path: "/form-repeater", component: <FormRepeater /> },
  { path: "/form-uploads", component: <FormUpload /> },
  { path: "/form-wizard", component: <FormWizard /> },
  { path: "/form-validation", component: <FormValidations /> },
  { path: "/dual-listbox", component: <DualListbox /> },

  //   // Ui
  { path: "/ui-alerts", component: <UiAlert /> },
  { path: "/ui-buttons", component: <UiButtons /> },
  { path: "/ui-cards", component: <UiCards /> },
  { path: "/ui-carousel", component: <UiCarousel /> },
  { path: "/ui-colors", component: <UiColors /> },
  { path: "/ui-dropdowns", component: <UiDropdown /> },
  { path: "/ui-offcanvas", component: <UiOffCanvas /> },
  { path: "/ui-general", component: <UiGeneral /> },
  { path: "/ui-grid", component: <UiGrid /> },
  { path: "/ui-images", component: <UiImages /> },
  { path: "/ui-lightbox", component: <UiLightbox /> },
  { path: "/ui-modals", component: <UiModal /> },
  { path: "/ui-progressbars", component: <UiProgressbar /> },
  { path: "/ui-tabs-accordions", component: <UiTabsAccordions /> },
  { path: "/ui-typography", component: <UiTypography /> },
  { path: "/ui-video", component: <UiVideo /> },
  { path: "/ui-session-timeout", component: <UiSessionTimeout /> },
  { path: "/ui-rating", component: <UiRating /> },
  { path: "/ui-rangeslider", component: <UiRangeSlider /> },
  { path: "/ui-notifications", component: <UiNotifications /> },
  { path: "/ui-placeholders", component: <UiPlaceholders /> },
  { path: "/ui-toasts", component: <UiToasts /> },
  { path: "/ui-utilities", component: <UiUtilities /> },

  //   //Utility
  { path: "/pages-starter", component: <PagesStarter /> },
  { path: "/pages-timeline", component: <PagesTimeline /> },
  { path: "/pages-faqs", component: <PagesFaqs /> },
  { path: "/pages-pricing", component: <PagesPricing /> },

  //   // this route should be at the end of all other routes
  //   // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
]

const publicRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },

  { path: "/pages-maintenance", component: <PagesMaintenance /> },
  { path: "/pages-comingsoon", component: <PagesComingsoon /> },
  { path: "/pages-404", component: <Pages404 /> },
  { path: "/pages-500", component: <Pages500 /> },
  { path: "/crypto-ico-landing", component: <CryptoIcoLanding /> },

  //   // Authentication Inner
  { path: "/pages-login", component: <Login1 /> },
  { path: "/pages-login-2", component: <Login2 /> },
  { path: "/pages-register", component: <Register1 /> },
  { path: "/pages-register-2", component: <Register2 /> },
  { path: "/page-recoverpw", component: <Recoverpw /> },
  { path: "/page-recoverpw-2", component: <Recoverpw2 /> },
  { path: "/pages-forgot-pwd", component: <ForgetPwd1 /> },
  { path: "/pages-forgot-pwd-2", component: <ForgetPwd2 /> },
  { path: "/auth-lock-screen", component: <LockScreen /> },
  { path: "/auth-lock-screen-2", component: <LockScreen2 /> },
  { path: "/page-confirm-mail", component: <ConfirmMail /> },
  { path: "/page-confirm-mail-2", component: <ConfirmMail2 /> },
  {
    path: "/auth-email-verification",
    component: <EmailVerification />,
  },
  {
    path: "/auth-email-verification-2",
    component: <EmailVerification2 />,
  },
  {
    path: "/auth-two-step-verification",
    component: <TwostepVerification />,
  },
  {
    path: "/auth-two-step-verification-2",
    component: <TwostepVerification2 />,
  },
]

export { authProtectedRoutes, publicRoutes }
