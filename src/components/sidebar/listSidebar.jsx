import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined'
import ContentPasteOffOutlinedIcon from '@mui/icons-material/ContentPasteOffOutlined'
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined'
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined'
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import FaxOutlinedIcon from '@mui/icons-material/FaxOutlined'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined'
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined'
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined'
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined'
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined'
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory'
export const listSideBar = [
   {
      title: 'Products',
      path: '/product',
      icon: () => <ProductionQuantityLimitsOutlinedIcon className="icon" />,
   },
   {
      title: 'Category',
      path: '/category',
      icon: () => <CategoryOutlinedIcon className="icon" />,
   },
   {
      title: 'Service',
      path: '/service',
      icon: () => <DesignServicesOutlinedIcon className="icon" />,
   },
   {
      title: 'Application',
      path: '/application',
      icon: () => <DisplaySettingsOutlinedIcon className="icon" />,
   },
   {
      title: 'News',
      path: '/new',
      icon: () => <NewspaperOutlinedIcon className="icon" />,
   },
   {
      title: 'Sales',
      path: '/sale',
      icon: () => <AttachMoneyOutlinedIcon className="icon" />,
   },
   {
      title: 'Report',
      path: '/report',
      icon: () => <BugReportOutlinedIcon className="icon" />,
   },
   {
      title: 'Recruitment',
      path: '/recruitment',
      icon: () => <StoreMallDirectoryIcon className="icon" />,
   },
   {
      title: 'Partner',
      path: '/partner',
      icon: () => <HandshakeOutlinedIcon className="icon" />,
   },
   {
      title: 'Office',
      path: '/office',
      icon: () => <FaxOutlinedIcon className="icon" />,
   },
   {
      title: 'Promotion video',
      path: '/promotion_video',
      icon: () => <OndemandVideoOutlinedIcon className="icon" />,
   },
   {
      title: 'News letter',
      path: '/newsletter',
      icon: () => <EmailOutlinedIcon className="icon" />,
   },
   {
      title: 'Activity',
      path: '/activity',
      icon: () => <LocalActivityOutlinedIcon className="icon" />,
   },
   {
      title: 'Content',
      path: '/content',
      icon: () => <ContentPasteOffOutlinedIcon className="icon" />,
   },
   {
      title: 'Support request',
      path: '/support_request',
      icon: () => <ContactSupportOutlinedIcon className="icon" />,
   },
   {
      title: 'Receive news',
      path: '/user_accept_receive_news',
      icon: () => <RecentActorsOutlinedIcon className="icon" />,
   },
   {
      title: 'Support',
      path: '/support',
      icon: () => <ContactSupportOutlinedIcon className="icon" />,
   },
   {
      title: 'File',
      path: '/file',
      icon: () => <CreateNewFolderOutlinedIcon className="icon" />,
   },
]
