import React from 'react';
import { Outlet } from 'react-router-dom';

import App from './../app.jsx';

import HomeSag from '../pages-sag/home/home.jsx';
import AlertaPrime from '../pages-sag/alertas/alertaPrime.jsx';
import DetalhesIndicador from '../pages-sag/alertas/indicadores/detalheIndicador.jsx';
import Inconsistencias from '../pages-sag/inconsistencias/inconsistencias.jsx';
import RelatoriosPersonalizados from '../pages-sag/relatoriosPers/formulario.jsx';
import ControlePrisoes from '../pages-sag/controlePrisoes/controlePrisoes.jsx';
import MagistradoProd from '../pages-sag/produtividade/magistrado.jsx';
import PlantaoProd from '../pages-sag/produtividade/plantao.jsx';
import ServentiaProd from '../pages-sag/produtividade/serventia.jsx';

import DashboardV1 from './../pages-example/dashboard/dashboard-v1.js';
import DashboardV2 from './../pages-example/dashboard/dashboard-v2.js';
import DashboardV3 from './../pages-example/dashboard/dashboard-v3.js';
import EmailInbox from './../pages-example/email/email-inbox.js';
import EmailCompose from './../pages-example/email/email-compose.js';
import EmailDetail from './../pages-example/email/email-detail.js';
import Widgets from './../pages-example/widget/widget.js';
import UIGeneral from './../pages-example/ui/ui-general.js';
import UITypography from './../pages-example/ui/ui-typography.js';
import UITabsAccordion from './../pages-example/ui/ui-tabs-accordion.js';
import UIModalNotification from './../pages-example/ui/ui-modal-notification.js';
import UIWidgetBoxes from './../pages-example/ui/ui-widget-boxes.js';
import UIMediaObject from './../pages-example/ui/ui-media-object.js';
import UIButtons from './../pages-example/ui/ui-buttons.js';
import UIIconFontAwesome from './../pages-example/ui/ui-icon-fontawesome.js';
import UIIconBootstrap from './../pages-example/ui/ui-icon-bootstrap.js';
import UIIconSimpleLineIcons from './../pages-example/ui/ui-icon-simple-line-icons.js';
import UILanguageBarIcon from './../pages-example/ui/ui-language-bar-icon.js';
import UISocialButtons from './../pages-example/ui/ui-social-buttons.js';
import Bootstrap5 from './../pages-example/bootstrap/bootstrap-5.js';
import FormElements from './../pages-example/form/form-elements.js';
import FormPlugins from './../pages-example/form/form-plugins.js';
import FormWizards from './../pages-example/form/form-wizards.js';
import TableElements from './../pages-example/table/table-elements.js';
import TablePlugins from './../pages-example/table/table-plugins.js';
import PosCustomerOrder from './../pages-example/pos/customer-order.js';
import PosKitchenOrder from './../pages-example/pos/kitchen-order.js';
import PosCounterCheckout from './../pages-example/pos/counter-checkout.js';
import PosTableBooking from './../pages-example/pos/table-booking.js';
import PosMenuStock from './../pages-example/pos/menu-stock.js';
import ChartJS from './../pages-example/chart/chart-js.js';
import ChartApex from './../pages-example/chart/chart-apex.js';
import Calendar from './../pages-example/calendar/calendar.js';
import Map from './../pages-example/map/map.js';
import Gallery from './../pages-example/gallery/gallery.js';
import PageBlank from './../pages-example/option/page-blank.js';
import PageWithFooter from './../pages-example/option/page-with-footer.js';
import PageWithFixedFooter from './../pages-example/option/page-with-fixed-footer.js';
import PageWithoutSidebar from './../pages-example/option/page-without-sidebar.js';
import PageWithRightSidebar from './../pages-example/option/page-with-right-sidebar.js';
import PageWithMinifiedSidebar from './../pages-example/option/page-with-minified-sidebar.js';
import PageWithTwoSidebar from './../pages-example/option/page-with-two-sidebar.js';
import PageFullHeight from './../pages-example/option/page-full-height.js';
import PageWithWideSidebar from './../pages-example/option/page-with-wide-sidebar.js';
import PageWithLightSidebar from './../pages-example/option/page-with-light-sidebar.js';
import PageWithMegaMenu from './../pages-example/option/page-with-mega-menu.js';
import PageWithTopMenu from './../pages-example/option/page-with-top-menu.js';
import PageWithBoxedLayout from './../pages-example/option/page-with-boxed-layout.js';
import PageWithMixedMenu from './../pages-example/option/page-with-mixed-menu.js';
import PageBoxedLayoutWithMixedMenu from './../pages-example/option/page-boxed-layout-with-mixed-menu.js';
import PageWithTransparentSidebar from './../pages-example/option/page-with-transparent-sidebar.js';
import PageWithSearchSidebar from './../pages-example/option/page-with-search-sidebar.js';
import ExtraTimeline from './../pages-example/extra/extra-timeline.js';
import ExtraComingSoon from './../pages-example/extra/extra-coming-soon.js';
import ExtraSearch from './../pages-example/extra/extra-search.js';
import ExtraInvoice from './../pages-example/extra/extra-invoice.js';
import ExtraError from './../pages-example/extra/extra-error.js';
import ExtraProfile from './../pages-example/extra/extra-profile.js';
import ExtraScrumBoard from './../pages-example/extra/extra-scrum-board.js';
import ExtraCookieAcceptanceBanner from './../pages-example/extra/extra-cookie-acceptance-banner.js';
import ExtraOrders from './../pages-example/extra/extra-orders.js';
import ExtraOrderDetails from './../pages-example/extra/extra-order-details.js';
import ExtraProducts from './../pages-example/extra/extra-products.js';
import ExtraProductDetails from './../pages-example/extra/extra-product-details.js';
import LoginV1 from './../pages-example/user/login-v1.js';
import LoginV2 from './../pages-example/user/login-v2.js';
import LoginV3 from './../pages-example/user/login-v3.js';
import RegisterV3 from './../pages-example/user/register-v3.js';
import HelperCSS from './../pages-example/helper/helper-css.js';
import PainelGestao from '../pages-sag/home/homeHook.jsx';


const AppRoute = [
  {
    path: '*', 
    element: <App />,
    children: [
		{
			path: '', 
			element: <HomeSag />
		},
    	{
			path: 'home', 
			element: <HomeSag />
		},
		{ path: 'gestao', element: <PainelGestao />},
		{
			path: 'relatorios-personalizados', 
			element: <RelatoriosPersonalizados />
		},
		{
			path: 'alertas-prime', 
			element: <AlertaPrime />
		},
		{
			path: 'detalheIndicador', element: <DetalhesIndicador />
		},
		{
			path: 'inconsistencias', element: <Inconsistencias />
		},
		
		{
			path: 'controle-prisoes', element: <ControlePrisoes />
		},
    	{
			path: 'produtividade/*', 
			element: <Outlet />,
			children: [
				{ path: 'produtividade-magistrado', element: <MagistradoProd /> },
				{ path: 'produtividade-serventia', element: <ServentiaProd /> },
				{ path: 'produtividade-plantao', element: <PlantaoProd /> }
			]
		},
			{
				path: 'email/*', 
				element: <Outlet />,
				children: [
					{ path: 'inbox', element: <EmailInbox /> },
					{ path: 'compose', element: <EmailCompose /> },
					{ path: 'detail', element: <EmailDetail /> }
				]
			},
			{
				path: 'widgets', 
				element: <Widgets />
			},
			{
				path: 'ui/*', 
				element: <Outlet />,
				children: [
					{ path: 'general', element: <UIGeneral /> },
					{ path: 'typography', element: <UITypography /> },
					{ path: 'tabs-accordion', element: <UITabsAccordion /> },
					{ path: 'modal-notification', element: <UIModalNotification /> },
					{ path: 'widget-boxes', element: <UIWidgetBoxes /> },
					{ path: 'media-object', element: <UIMediaObject /> },
					{ path: 'buttons', element: <UIButtons /> },
					{ path: 'icon-fontawesome', element: <UIIconFontAwesome /> },
					{ path: 'icon-bootstrap', element: <UIIconBootstrap /> },
					{ path: 'icon-simple-line-icons', element: <UIIconSimpleLineIcons /> },
					{ path: 'language-bar-icon', element: <UILanguageBarIcon /> },
					{ path: 'social-buttons', element: <UISocialButtons /> }
				]
			},
			{
				path: 'bootstrap-5', 
				element: <Bootstrap5 />
			},
			{
				path: 'form/*', 
				element: <Outlet />,
				children: [
					{ path: 'elements', element: <FormElements /> },
					{ path: 'plugins', element: <FormPlugins /> },
					{ path: 'wizards', element: <FormWizards /> }
				]
			},
			{
				path: 'table/*', 
				element: <Outlet />,
				children: [
					{ path: 'elements', element: <TableElements /> },
					{ path: 'plugins', element: <TablePlugins /> }
				]
			},
			{
				path: 'pos/*', 
				element: <Outlet />,
				children: [
					{ path: 'customer-order', element: <PosCustomerOrder /> },
					{ path: 'kitchen-order', element: <PosKitchenOrder /> },
					{ path: 'counter-checkout', element: <PosCounterCheckout /> },
					{ path: 'table-booking', element: <PosTableBooking /> },
					{ path: 'menu-stock', element: <PosMenuStock /> }
				]
			},
			{
				path: 'chart/*', 
				element: <Outlet />,
				children: [
					{ path: 'js', element: <ChartJS /> },
					{ path: 'apex', element: <ChartApex /> }
				]
			},
			{
				path: 'calendar', 
				element: <Calendar />
			},
			{
				path: 'map', 
				element: <Map />
			},
			{
				path: 'gallery', 
				element: <Gallery />
			},
			{
				path: 'page-option/*', 
				element: <Outlet />,
				children: [
					{ path: 'blank', element: <PageBlank /> },
					{ path: 'with-footer', element: <PageWithFooter /> },
					{ path: 'with-fixed-footer', element: <PageWithFixedFooter /> },
					{ path: 'without-sidebar', element: <PageWithoutSidebar /> },
					{ path: 'with-right-sidebar', element: <PageWithRightSidebar /> },
					{ path: 'with-minified-sidebar', element: <PageWithMinifiedSidebar /> },
					{ path: 'with-two-sidebar', element: <PageWithTwoSidebar /> },
					{ path: 'full-height', element: <PageFullHeight /> },
					{ path: 'with-wide-sidebar', element: <PageWithWideSidebar /> },
					{ path: 'with-light-sidebar', element: <PageWithLightSidebar /> },
					{ path: 'with-mega-menu', element: <PageWithMegaMenu /> },
					{ path: 'with-top-menu', element: <PageWithTopMenu /> },
					{ path: 'with-boxed-layout', element: <PageWithBoxedLayout /> },
					{ path: 'with-mixed-menu', element: <PageWithMixedMenu /> },
					{ path: 'boxed-layout-with-mixed-menu', element: <PageBoxedLayoutWithMixedMenu /> },
					{ path: 'with-boxed-layout', element: <PageWithBoxedLayout /> },
					{ path: 'with-transparent-sidebar', element: <PageWithTransparentSidebar /> },
					{ path: 'with-search-sidebar', element: <PageWithSearchSidebar /> }
				]
			},
			{
				path: 'extra/*', 
				element: <Outlet />,
				children: [
					{ path: 'timeline', element:<ExtraTimeline /> },
					{ path: 'coming-soon', element:<ExtraComingSoon />},
					{ path: 'search', element:<ExtraSearch /> },
					{ path: 'invoice', element:<ExtraInvoice /> },
					{ path: 'error', element:<ExtraError /> },
					{ path: 'profile', element:<ExtraProfile /> },
					{ path: 'scrum-board', element:<ExtraScrumBoard /> },
					{ path: 'cookie-acceptance-banner', element:<ExtraCookieAcceptanceBanner /> },
					{ path: 'orders', element:<ExtraOrders /> },
					{ path: 'order-details', element:<ExtraOrderDetails /> },
					{ path: 'products', element:<ExtraProducts /> },
					{ path: 'product-details', element:<ExtraProductDetails /> }
				]
			}, 
			{
				path: 'user/*', 
				element: <Outlet />,
				children: [
					{ path: 'login-v1', element:<LoginV1 /> },
					{ path: 'login-v2', element:<LoginV2 /> },
					{ path: 'login-v3', element:<LoginV3 /> },
					{ path: 'register-v3', element:<RegisterV3 /> }
				]
			}, 
			{
				path: 'helper/css', 
				element: <HelperCSS />
			}
		]
  }
];


export default AppRoute;