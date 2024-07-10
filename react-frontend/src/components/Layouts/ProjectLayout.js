import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'primereact/utils';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';
// manage change

import DynamicDashboards from '../Project/Admin/DynamicDashboards';
import UsersPage from "../UsersPage/UsersPage";
import CommandMenu from '../Project/CommandCenter';
import AppTopbar from './AppTopbar';
import CompaniesPage from '../CompaniesPage/CompaniesPage';
import BranchesPage from '../BranchesPage/BranchesPage';
import DepartmentsPage from '../DepartmentsPage/DepartmentsPage';
import SectionsPage from '../SectionsPage/SectionsPage';
import RolesPage from '../RolesPage/RolesPage';
import PositionsPage from '../PositionsPage/PositionsPage';
import TemplatesPage from '../TemplatesPage/TemplatesPage';
import MailsPage from '../MailsPage/MailsPage';
import TestsPage from '../TestsPage/TestsPage';
import UserAddressesPage from '../UserAddressesPage/UserAddressesPage';
import CompanyAddressesPage from '../CompanyAddressesPage/CompanyAddressesPage';
import CompanyPhonesPage from '../CompanyPhonesPage/CompanyPhonesPage';
import UserPhonesPage from '../UserPhonesPage/UserPhonesPage';
import ProductsPage from "../ProductsPage/ProductsPage";
import TestPage from "../TestPage/TestPage";
// ~cb-add-import~

const ProjectLayout = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();

    const btnRef8 = useRef(null);
    const btnRef9 = useRef(null);
    const btnRef10 = useRef(null);
    const btnRef11 = useRef(null);

    const [activeTab, setActiveTab] = useState(0);
    const [activeTab2, setActiveTab2] = useState();
    const [activeChild, setActiveChild] = useState('');

    useEffect(() => {
        const lastActiveTab = Number(localStorage.getItem('currentActiveTab1')) || 0;
        const lastActiveTab2 = localStorage.getItem('currentActiveTab2') || 'home';

        if (!activeTab) {
            setActiveTab(lastActiveTab);
        }

        if (!activeTab2) {
            setActiveTab2(lastActiveTab2);
        } else if (activeTab !== lastActiveTab) setActiveTab2('home');
    }, []);

    const setCurrentActiveTab1 = (tab1) => {
        localStorage.setItem('currentActiveTab1', tab1);
        setActiveTab(tab1);
    };

    const setCurrentActiveTab2 = (tab2) => {
        localStorage.setItem('currentActiveTab2', tab2);
        setActiveTab2(tab2);
        setActiveChild(tab2);
    };

    const renderChild = (page) => {
        switch (page) {
            case 'companies':
                return <CompaniesPage />;
            case 'branches':
                return <BranchesPage />;
            case 'departments':
                return <DepartmentsPage />;
            case 'sections':
                return <SectionsPage />;
            case 'roles':
                return <RolesPage />;
            case 'positions':
                return <PositionsPage />;
            case 'profiles':
                return <ProfilesPage />;
            case 'templates':
                return <TemplatesPage />;
            case 'mails':
                return <MailsPage />;
            case 'tests':
                return <TestsPage />;
            case 'permissionServices':
                return <PermissionServicesPage />;
            case 'permissionFields':
                return <PermissionFieldsPage />;
            case 'userAddresses':
                return <UserAddressesPage />;
            case 'companyAddresses':
                return <CompanyAddressesPage />;
            case 'companyPhones':
                return <CompanyPhonesPage />;
            case 'userPhones':
                return <UserPhonesPage />;
            case 'users':
                return <UsersPage />;
            // new pages
case "products":
                return <ProductsPage />;
case "test":
                return <TestPage />;
            /* ~cb-add-thurthy~ */
            default:
                return props.children ? props.children : <DynamicDashboards/>;
        }
    };

    return (
        <>
            <AppTopbar />
            <div className="flex relative lg:static surface-0" style={{ minHeight: '90vh', marginTop: '70px' }}>
                <div id="app-sidebar" className="h-full lg:h-auto hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-full md:w-auto">
                    <div className="flex h-full">
                        <div className="flex flex-column h-full bg-yellow-600 flex-shrink-0 select-none">
                            <div className="flex align-items-center justify-content-center flex-shrink-0">
                                <Button icon="pi pi-home" rounded className="mt-1" style={{ color: 'white' }} outlined aria-label="home" onClick={() => setActiveTab2(null)} />
                            </div>
                            <div className="overflow-y-auto mt-3">
                                <ul className="list-none py-3 pl-2 pr-0 m-0">
                                    <li className="mb-2">
                                        <a
                                            className={classNames('p-ripple flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-yellow-600 text-yellow-100 hover:text-yellow-50 transition-duration-150 transition-colors', { 'bg-white': activeTab === 0 })}
                                            onClick={() => {
                                                setCurrentActiveTab1(0);
                                                setCurrentActiveTab2(null);
                                            }}
                                            style={{
                                                borderTopLeftRadius: '30px',
                                                borderBottomLeftRadius: '30px'
                                            }}
                                        >
                                            <i className="pi pi-building text-xl" style={{ color: activeTab === 0 ? 'black' : 'white' }}></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className={classNames('p-ripple flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-yellow-600 text-yellow-100 hover:text-yellow-50 transition-duration-150 transition-colors', { 'bg-white': activeTab === 1 })}
                                            onClick={() => {
                                                setCurrentActiveTab1(1);
                                                setCurrentActiveTab2(null);
                                            }}
                                            style={{
                                                borderTopLeftRadius: '30px',
                                                borderBottomLeftRadius: '30px'
                                            }}
                                        >
                                            <i className="pi pi-objects-column text-xl" style={{ color: activeTab === 1 ? 'black' : 'white' }}></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className={classNames('p-ripple flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-yellow-600 text-yellow-100 hover:text-yellow-50 transition-duration-150 transition-colors', { 'bg-white': activeTab === 2 })}
                                            onClick={() => {
                                                setCurrentActiveTab1(2);
                                                setCurrentActiveTab2(null);
                                            }}
                                            style={{
                                                borderTopLeftRadius: '30px',
                                                borderBottomLeftRadius: '30px'
                                            }}
                                        >
                                            <i className="pi pi-users text-xl" style={{ color: activeTab === 2 ? 'black' : 'white' }}></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className={classNames('p-ripple flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-yellow-600 text-yellow-100 hover:text-yellow-50 transition-duration-150 transition-colors', { 'bg-white': activeTab === 3 })}
                                            onClick={() => {
                                                setCurrentActiveTab1(3);
                                                setCurrentActiveTab2(null);
                                            }}
                                            style={{
                                                borderTopLeftRadius: '30px',
                                                borderBottomLeftRadius: '30px'
                                            }}
                                        >
                                            <i className="pi pi-comments text-xl" style={{ color: activeTab === 3 ? 'black' : 'white' }}></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a
                                            className={classNames('p-ripple flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover:bg-yellow-600 text-yellow-100 hover:text-yellow-50 transition-duration-150 transition-colors', { 'bg-white': activeTab === 4 })}
                                            onClick={() => {
                                                setCurrentActiveTab1(4);
                                                setCurrentActiveTab2(null);
                                            }}
                                            style={{
                                                borderTopLeftRadius: '30px',
                                                borderBottomLeftRadius: '30px'
                                            }}
                                        >
                                            <i className="pi pi-building text-xl" style={{ color: activeTab === 4 ? 'black' : 'white' }}></i>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-auto">
                                <hr className="mb-3 mx-2 border-top-1 border-none border-yellow-300" />
                                <a
                                    className="p-ripple m-3 flex align-items-center cursor-pointer p-2 justify-content-center hover:bg-yellow-600 border-round text-300 hover:text-0
            transition-duration-150 transition-colors"
                                >
                                    <img src="/assets/images/blocks/avatars/circle/avatar-f-1.png" style={{ width: '24px', height: '24px' }} alt="avatar-f-1" />
                                    <Ripple />
                                </a>
                            </div>
                        </div>
                        <div className={classNames('flex flex-column bg-white p-4 overflow-y-auto flex-shrink-0 flex-grow-1 md:flex-grow-0')} style={{ width: '300px', maxHeight: '100vh' }}>
                            <div className="justify-content-end mb-3 flex lg:hidden">
                                <StyleClass nodeRef={btnRef9} selector="#app-sidebar" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft">
                                    <button
                                        ref={btnRef9}
                                        icon="pi pi-times"
                                        className="p-ripple cursor-pointer text-white appearance-none bg-transparent border-none inline-flex justify-content-center align-items-center border-circle hover:bg-yellow-600 transition-duration-150 transition-colors"
                                        style={{ width: '2rem', height: '2rem' }}
                                    >
                                        <i className="pi pi-times text-xl text-yellow-100" style={{ color: activeTab === 0 ? 'black' : 'white' }}></i>
                                        <Ripple />
                                    </button>
                                </StyleClass>
                            </div>
                            <div className={classNames('border-round flex-auto')}>
                                <div className={classNames({ hidden: activeTab !== 0 })}>
                                    <div className="p-3 font-medium text-2xl mb-5">Project</div>
                                    <ul className="list-none p-0 m-0">
<li
                onClick={() => {
                  setCurrentActiveTab2("products");
                }}
                className={classNames("mb-3 flex align-items-start p-3", {
                  "bg-yellow-700": activeTab2 === "products",
                })}
                style={{ borderRadius: "12px" }}
              >
                <i
                  className="pi pi-user text-xl mr-3 "
                  style={{ color: activeTab2 !== "products" ? "black" : "white" }}
                ></i>
                <div className="flex flex-column">
                  <span
                    className={classNames({
                      "text-white": activeTab2 === "products",
                      "text-black": activeTab2 !== "products",
                    })}
                  >
                  Products
                  </span>
                  <p
                    className={classNames("mt-2 mb-0 line-height-3 ", {
                      "text-yellow-500": activeTab2 === "products",
                      "text-yellow-700": activeTab2 !== "products",
                    })}
                  >
                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                  </p>
                </div>
              </li>
<li
                onClick={() => {
                  setCurrentActiveTab2("test");
                }}
                className={classNames("mb-3 flex align-items-start p-3", {
                  "bg-yellow-700": activeTab2 === "test",
                })}
                style={{ borderRadius: "12px" }}
              >
                <i
                  className="pi pi-user text-xl mr-3 "
                  style={{ color: activeTab2 !== "test" ? "black" : "white" }}
                ></i>
                <div className="flex flex-column">
                  <span
                    className={classNames({
                      "text-white": activeTab2 === "test",
                      "text-black": activeTab2 !== "test",
                    })}
                  >
                  Test
                  </span>
                  <p
                    className={classNames("mt-2 mb-0 line-height-3 ", {
                      "text-yellow-500": activeTab2 === "test",
                      "text-yellow-700": activeTab2 !== "test",
                    })}
                  >
                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                  </p>
                </div>
              </li>
{/* ~cb-add-services-card~ */}
                                        </ul>
                                </div>
                                <div
                                    className={classNames({
                                        hidden: activeTab !== 1
                                    })}
                                >
                                    <div className="p-3 font-medium text-2xl mb-5">Data Management</div>
                                    <ul className="list-none p-0 m-0">
                                        {/* ~cb-add-ref-services-card~ */}
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('tests');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'tests'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'tests' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'tests',
                                                        'text-black': activeTab2 !== 'tests'
                                                    })}
                                                >
                                                    Tests
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'tests',
                                                        'text-yellow-700': activeTab2 !== 'tests'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className={classNames({
                                        hidden: activeTab !== 2
                                    })}
                                >
                                    <div className="p-3 font-medium text-2xl mb-5">Users Management</div>
                                    <ul className="list-none p-0 m-0">
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('users');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'users'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'users' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'users',
                                                        'text-black': activeTab2 !== 'users'
                                                    })}
                                                >
                                                    Users{' '}
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'users',
                                                        'text-yellow-700': activeTab2 !== 'users'
                                                    })}
                                                >
                                                    Users interact, admins manage, both uphold application integrity.
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('profiles');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'profiles'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'profiles' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'profiles',
                                                        'text-black': activeTab2 !== 'profiles'
                                                    })}
                                                >
                                                    Profiles
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'profiles',
                                                        'text-yellow-700': activeTab2 !== 'profiles'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('permissionServices');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'permissionServices'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'permissionServices' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'permissionServices',
                                                        'text-black': activeTab2 !== 'permissionServices'
                                                    })}
                                                >
                                                    Services
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'permissionServices',
                                                        'text-yellow-700': activeTab2 !== 'permissionServices'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('permissionFields');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'permissionFields'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'permissionFields' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'permissionFields',
                                                        'text-black': activeTab2 !== 'permissionFields'
                                                    })}
                                                >
                                                    Fields
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'permissionFields',
                                                        'text-yellow-700': activeTab2 !== 'permissionFields'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('roles');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'roles'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'roles' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'roles',
                                                        'text-black': activeTab2 !== 'roles'
                                                    })}
                                                >
                                                    Roles
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'roles',
                                                        'text-yellow-700': activeTab2 !== 'roles'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('positions');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'positions'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'positions' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'positions',
                                                        'text-black': activeTab2 !== 'positions'
                                                    })}
                                                >
                                                    Positions
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'positions',
                                                        'text-yellow-700': activeTab2 !== 'positions'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('userAddresses');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'userAddresses'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'userAddresses' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'userAddresses',
                                                        'text-black': activeTab2 !== 'userAddresses'
                                                    })}
                                                >
                                                    Addresses
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'userAddresses',
                                                        'text-yellow-700': activeTab2 !== 'userAddresses'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('userPhones');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'userPhones'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'userPhones' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'userPhones',
                                                        'text-black': activeTab2 !== 'userPhones'
                                                    })}
                                                >
                                                    Phones
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'userPhones',
                                                        'text-yellow-700': activeTab2 !== 'userPhones'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className={classNames({
                                        hidden: activeTab !== 3
                                    })}
                                >
                                    <div className="p-3 font-medium text-2xl mb-5">Messages</div>
                                    <ul className="list-none p-0 m-0">
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('mails');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'mails'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'mails' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'mails',
                                                        'text-black': activeTab2 !== 'mails'
                                                    })}
                                                >
                                                    Mails
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'mails',
                                                        'text-yellow-700': activeTab2 !== 'mails'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>

                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('templates');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'templates'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'templates' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'templates',
                                                        'text-black': activeTab2 !== 'templates'
                                                    })}
                                                >
                                                    Templates
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'templates',
                                                        'text-yellow-700': activeTab2 !== 'templates'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className={classNames({ hidden: activeTab !== 4 })}>
                                    <div className="p-3 font-medium text-2xl mb-5">Company</div>
                                    <ul className="list-none p-0 m-0">
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('companies');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'companies'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'companies' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'companies',
                                                        'text-black': activeTab2 !== 'companies'
                                                    })}
                                                >
                                                    Companies
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'companies',
                                                        'text-yellow-700': activeTab2 !== 'companies'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('branches');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'branches'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'branches' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'branches',
                                                        'text-black': activeTab2 !== 'branches'
                                                    })}
                                                >
                                                    Branches
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'branches',
                                                        'text-yellow-700': activeTab2 !== 'branches'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('departments');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'departments'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'departments' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'departments',
                                                        'text-black': activeTab2 !== 'departments'
                                                    })}
                                                >
                                                    Departments
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'departments',
                                                        'text-yellow-700': activeTab2 !== 'departments'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('sections');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'sections'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'sections' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'sections',
                                                        'text-black': activeTab2 !== 'sections'
                                                    })}
                                                >
                                                    Sections
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'sections',
                                                        'text-yellow-700': activeTab2 !== 'sections'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('companyAddresses');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'companyAddresses'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'companyAddresses' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'companyAddresses',
                                                        'text-black': activeTab2 !== 'companyAddresses'
                                                    })}
                                                >
                                                    Company Addresses
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'companyAddresses',
                                                        'text-yellow-700': activeTab2 !== 'companyAddresses'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>
                                        <li
                                            onClick={() => {
                                                setCurrentActiveTab2('companyPhones');
                                            }}
                                            className={classNames('mb-3 flex align-items-start p-3', {
                                                'bg-yellow-700': activeTab2 === 'companyPhones'
                                            })}
                                            style={{ borderRadius: '12px' }}
                                        >
                                            <i
                                                className="pi pi-user text-xl mr-3 "
                                                style={{
                                                    color: activeTab2 !== 'companyPhones' ? 'black' : 'white'
                                                }}
                                            ></i>
                                            <div className="flex flex-column">
                                                <span
                                                    className={classNames({
                                                        'text-white': activeTab2 === 'companyPhones',
                                                        'text-black': activeTab2 !== 'companyPhones'
                                                    })}
                                                >
                                                    Company Phones
                                                </span>
                                                <p
                                                    className={classNames('mt-2 mb-0 line-height-3 ', {
                                                        'text-yellow-500': activeTab2 === 'companyPhones',
                                                        'text-yellow-700': activeTab2 !== 'companyPhones'
                                                    })}
                                                >
                                                    Accumsan sit amet nulla facilisi morbi tempus iaculis.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen flex flex-column relative flex-auto overlay-div">
                    <div className="flex justify-content-between lg:justify-content-start align-items-center px-5 surface-section border-bottom-1 surface-border relative lg:static" style={{ height: '60px' }}>
                        <div className="flex">
                            <StyleClass nodeRef={btnRef10} selector="#app-sidebar" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft">
                                <a ref={btnRef10} className="p-ripple cursor-pointer block lg:hidden text-700 mr-3">
                                    <i className="pi pi-bars text-4xl" style={{ color: activeTab === 0 ? 'black' : 'white' }}></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                        </div>
                        <img src="/assets/logo/cb-logo.svg" alt="Image" height="30" className="block lg:hidden" />
                        <StyleClass nodeRef={btnRef11} selector="@next" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <a ref={btnRef11} className="p-ripple cursor-pointer block lg:hidden text-700">
                                <i className="pi pi-ellipsis-v text-2xl" style={{ color: activeTab === 0 ? 'black' : 'white' }}></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul
                            className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row lg:w-full
    surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
                        >
                            <li>
                                <a
                                    className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors"
                                >
                                    <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0" style={{ color: 'black' }}></i>
                                    <span className="block lg:hidden font-medium">Inbox</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors"
                                >
                                    <i className="pi pi-star text-base lg:text-2xl mr-2 lg:mr-0" style={{ color: 'black' }}></i>
                                    <span className="block lg:hidden font-medium">Favorites</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors"
                                >
                                    <i className="pi pi-user text-base lg:text-2xl mr-2 lg:mr-0" style={{ color: 'black' }}></i>
                                    <span className="block lg:hidden font-medium">Account</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors"
                                >
                                    <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                                        <Badge severity="danger" value={4}></Badge>
                                    </i>
                                    <span className="block lg:hidden font-medium">Notifications</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors"
                                >
                                    <CommandMenu className="ml-3" />
                                    <span className="block lg:hidden font-medium">Search</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="border-top-1 surface-border lg:border-top-none lg:ml-auto">
                                <a
                                    className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
            transition-duration-150 transition-colors"
                                >
                                    <img src="/assets/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 lg:mr-0" style={{ width: '32px', height: '32px' }} alt="avatar-f-1" />
                                    <div className="block lg:hidden">
                                        <div className="text-900 font-medium">Josephine Lillard</div>
                                        <span className="text-600 font-medium text-sm">Marketing Specialist</span>
                                    </div>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                        <StyleClass nodeRef={btnRef8} selector="#rightsidebar" enterActiveClassName="fadeinright" leaveToClassName="hidden" leaveActiveClassName="fadeoutright" hideOnOutsideClick>
                            <a ref={btnRef8} className="p-ripple cursor-pointer block text-700 ml-3">
                                <i className="pi pi-arrow-left text-2xl"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                    </div>
                    <div className="flex flex-column flex-auto">
                        <div className="border-round surface-border surface-section flex-auto scrolling-div">{_.isEmpty(urlParams) || activeTab2 === activeChild ? renderChild(activeTab2) : props.children}</div>
                    </div>
                </div>
            </div>
            <div id="rightsidebar" className="surface-overlay shadow-2 hidden absolute right-0 w-20rem animation-duration-150 animation-ease-in-out" style={{ top: '60px', height: 'calc(100% - 60px)' }}>
                <div className="flex flex-column h-full p-4">
                    <span className="text-xl font-medium text-900 mb-3">Right Sidebar</span>
                    <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
                </div>
            </div>
        </>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, mapDispatch)(ProjectLayout);
