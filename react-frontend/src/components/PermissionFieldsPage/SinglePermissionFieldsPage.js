import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import client from '../../services/restClient';
import { Tag } from 'primereact/tag';
import moment from 'moment';
import { InputText } from 'primereact/inputtext';
import ProjectLayout from '../Layouts/ProjectLayout';

const SinglePermissionFieldsPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service('permissionFields')
            .get(urlParams.singlePermissionFieldsId, {
                query: {
                    $populate: [
                        {
                            path: 'createdBy',
                            service: 'users',
                            select: ['name']
                        },
                        {
                            path: 'updatedBy',
                            service: 'users',
                            select: ['name']
                        },
                        'profile'
                    ]
                }
            })
            .then((res) => {
                set_entity(res || {});
                const profile = Array.isArray(res.profile) ? res.profile.map((elem) => ({ _id: elem._id, name: elem.name })) : res.profile ? [{ _id: res.profile._id, name: res.profile.name }] : [];
                setProfile(profile);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({
                    title: 'PermissionFields',
                    type: 'error',
                    message: error.message || 'Failed get permissionFields'
                });
            });
    }, [props, urlParams.singlePermissionFieldsId]);

    const goBack = () => {
        navigate('/permissionFields');
    };

    return (
        <ProjectLayout>
            <div className="col-12 flex flex-column align-items-center">
                <div className="col-10">
                    <div className="flex align-items-center justify-content-start">
                        <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                        <h3 className="m-0">Permission Fields</h3>
                    </div>
                    <p>permissionFields/{urlParams.singlePermissionFieldsId}</p>
                    {/* ~cb-project-dashboard~ */}
                </div>
                <div className="card w-full">
                    <div className="grid ">
                        <div className="col-12 md:col-6 lg:col-3">
                            <label className="text-sm text-primary">Service</label>
                            <p className="m-0 ml-3">{_entity?.service}</p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <label className="text-sm text-primary">Field</label>
                            <p className="m-0 ml-3">{_entity?.fieldId}</p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <label className="text-sm text-primary">Read own</label>
                            <p className="m-0 ml-3">
                                <i id="read" className={`pi ${_entity?.read ? 'pi-check' : 'pi-times'}`}></i>
                            </p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <label className="text-sm text-primary">Read all</label>
                            <p className="m-0 ml-3">
                                <i id="readAll" className={`pi ${_entity?.readAll ? 'pi-check' : 'pi-times'}`}></i>
                            </p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <label className="text-sm text-primary">Update own</label>
                            <p className="m-0 ml-3">
                                <i id="updateOwn" className={`pi ${_entity?.updateOwn ? 'pi-check' : 'pi-times'}`}></i>
                            </p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <label className="text-sm text-primary">Update all</label>
                            <p className="m-0 ml-3">
                                <i id="updateAll" className={`pi ${_entity?.updateAll ? 'pi-check' : 'pi-times'}`}></i>
                            </p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <label className="text-sm text-primary">Delete own</label>
                            <p className="m-0 ml-3">
                                <i id="deleteOwn" className={`pi ${_entity?.deleteOwn ? 'pi-check' : 'pi-times'}`}></i>
                            </p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <label className="text-sm text-primary">Delete all</label>
                            <p className="m-0 ml-3">
                                <i id="deleteAll" className={`pi ${_entity?.deleteAll ? 'pi-check' : 'pi-times'}`}></i>
                            </p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <label className="text-sm">Profile</label>
                            <p>
                                {profile.map((elem) => (
                                    <Link key={elem._id} to={`/profiles/${elem._id}`}>
                                        <div className="card">
                                            <p className="text-xl text-primary">{elem.name}</p>
                                        </div>
                                    </Link>
                                ))}
                            </p>
                        </div>

                        <div className="col-12">&nbsp;</div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <Tag value="created By:"></Tag>
                            <p className="m-0 ml-3">{_entity?.createdBy?.name}</p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <Tag value="created At:"></Tag>
                            <p className="m-0 ml-3">{moment(_entity?.createdAt).fromNow()}</p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <Tag value="last Updated By:"></Tag>
                            <p className="m-0 ml-3">{_entity?.updatedBy?.name}</p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <Tag value="updated At:"></Tag>
                            <p className="m-0 ml-3">{moment(_entity?.updatedAt).fromNow()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectLayout>
    );
};

const mapState = (state) => {
    const { user, isLoggedIn } = state.auth;
    return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(SinglePermissionFieldsPage);
