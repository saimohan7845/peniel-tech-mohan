import Icon from "@mui/material/Icon";
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Career from "pages/LandingPages/Author";
import SignIn from "layouts/pages/authentication/sign-in";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "about",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "pages",
        collapse: [
          {
            name: "about us",
            route: "/pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "career",
            route: "/pages/career",
            component: <Career />,
          },
          {
            name: "contact us",
            route: "/pages/contact-us",
            component: <ContactUs />,
          },
        ],
      },
      {
        name: "account",
        collapse: [
          {
            name: "sign in",
            route: "/authentication/sign-in",
            component: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    name: "features",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "process management",
        description: "See all process",
        dropdown: true,
        collapse: [
          {
            name: "blueprint",
            route: "features/process-management/blueprint",
            component: <PageHeaders />,
          },
          {
            name: "approval process",
            route: "/features/process-management/approval-process",
            component: <Features />,
          },
          {
            name: "validation rules",
            route: "/features/process-management/validation-rules",
            component: <PageHeaders />,
          },
          {
            name: "email parser",
            route: "/features/process-management/email-parser",
            component: <Features />,
          },
          {
            name: "scoring rules",
            route: "/features/process-management/scoring-rules",
            component: <PageHeaders />,
          },
          {
            name: "review process",
            route: "/features/process-management/review-process",
            component: <Features />,
          },
        ],
      },
      {
        name: "analytics",
        description: "See all analytics",
        dropdown: true,
        collapse: [
          {
            name: "reports",
            route: "/features/analytics/reports",
            component: <Navbars />,
          },
          {
            name: "charts",
            route: "/features/analytics/charts",
            component: <NavTabs />,
          },
          {
            name: "zones",
            route: "/features/analytics/zones",
            component: <Pagination />,
          },
          {
            name: "comparator",
            route: "/features/analytics/comparator",
            component: <NavTabs />,
          },
          {
            name: "capabilities",
            route: "/features/analytics/capabilities",
            component: <Pagination />,
          },
        ],
      },
      {
        name: "sales force automation",
        description: "See all sales force automation",
        dropdown: true,
        collapse: [
          {
            name: "lead management",
            route: "/features/sales-force/lead-management",
            component: <Inputs />,
          },
          {
            name: "deal management",
            route: "/features/sales-force/deal-management",
            component: <Forms />,
          },
          {
            name: "contact management",
            route: "/features/sales-force/contact-management",
            component: <Inputs />,
          },
          {
            name: "account management",
            route: "/features/sales-force/account-management",
            component: <Forms />,
          },
          {
            name: "workflow automation",
            route: "/features/sales-force/workflow-automation",
            component: <Inputs />,
          },
        ],
      },
      {
        name: "Mobile",
        description: "See all mobile",
        dropdown: true,
        collapse: [
          {
            name: "mobile CRM app",
            route: "/features/mobile/mobile-crm-app",
            component: <Alerts />,
          },
          {
            name: "business card scanner",
            route: "/features/mobile/business-card-scanner",
            component: <Modals />,
          },
          {
            name: "analytics mobile",
            route: "/features/mobile/analytics-mobile",
            component: <TooltipsPopovers />,
          },
        ],
      },
      {
        name: "team collaboration",
        description: "See all team collaborations",
        dropdown: true,
        collapse: [
          {
            name: "feeds",
            route: "/features/team-collaborations/feeds",
            component: <Avatars />,
          },
          {
            name: "chat",
            route: "/features/team-collaborations/chat",
            component: <Badges />,
          },
          {
            name: "notes",
            route: "/features/team-collaborations/notes",
            component: <BreadcrumbsEl />,
          },
          {
            name: "tags",
            route: "/features/team-collaborations/tags",
            component: <Buttons />,
          },
          {
            name: "groups",
            route: "/features/team-collaborations/groups",
            component: <Buttons />,
          },
        ],
      },
    ],
  },
  {
    name: "solutions",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "by size",
        description: "All about overview, Enterprise and Small Business",
        href: "https://www.penieltech.com/erpnext/inventory-trading-erp-software",
      },
      {
        name: "by role",
        description: "See our Sales Reps and Sales Leaders",
        href: "https://www.penieltech.com/erpnext/inventory-trading-erp-software",
      },
      {
        name: "by industry",
        description: "Explore our collection of fully designed Automotive CRM, Real Estate, etc",
        href: "https://www.penieltech.com/erpnext/erp-for-manufacturing-industry",
      },
      {
        name: "use Cases",
        description: "Check how you can integrate our Custom Implementations",
        href: "https://www.penieltech.com/erpnext/asset-management",
      },
    ],
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    href: "https://www.github.com/",
  },
];

export default routes;
