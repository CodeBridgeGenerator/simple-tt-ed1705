import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import client from '../../services/restClient';
import { Tag } from 'primereact/tag';
import moment from 'moment';
import { InputText } from 'primereact/inputtext';
import ProjectLayout from '../Layouts/ProjectLayout';

const SingleSuperiorPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    const [superior, setSuperior] = useState([]);
    const [subordinate, setSubordinate] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service('superior')
            .get(urlParams.singleSuperiorId, {
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
                        'superior',
                        'subordinate'
                    ]
                }
            })
            .then((res) => {
                set_entity(res || {});
                const superior = Array.isArray(res.superior) ? res.superior.map((elem) => ({ _id: elem._id, supervisor: elem.supervisor })) : res.superior ? [{ _id: res.superior._id, supervisor: res.superior.supervisor }] : [];
                setSuperior(superior);
                const subordinate = Array.isArray(res.subordinate) ? res.subordinate.map((elem) => ({ _id: elem._id, empno: elem.empno })) : res.subordinate ? [{ _id: res.subordinate._id, empno: res.subordinate.empno }] : [];
                setSubordinate(subordinate);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: 'Superior', type: 'error', message: error.message || 'Failed get superior' });
            });
    }, [props, urlParams.singleSuperiorId]);

    const goBack = () => {
        navigate('/superior');
    };

    return (
        <ProjectLayout>
            <div className="col-12 flex flex-column align-items-center">
                <div className="col-10">
                    <div className="flex align-items-center justify-content-start">
                        <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                        <h3 className="m-0">Superior</h3>
                    </div>
                    <p>superior/{urlParams.singleSuperiorId}</p>
                    {/* ~cb-project-dashboard~ */}
                </div>
                <div className="card w-full">
                    <div className="grid ">
                        <div className="col-12 md:col-6 lg:col-3">
                            <label className="text-sm">Superior</label>
                            <p>
                                {superior.map((elem) => (
                                    <Link key={elem._id} to={`/staffinfo/${elem._id}`}>
                                        <div className="card">
                                            <p className="text-xl text-primary">{elem.supervisor}</p>
                                        </div>
                                    </Link>
                                ))}
                            </p>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <label className="text-sm">Subordinate</label>
                            <p>
                                {subordinate.map((elem) => (
                                    <Link key={elem._id} to={`/staffinfo/${elem._id}`}>
                                        <div className="card">
                                            <p className="text-xl text-primary">{elem.empno}</p>
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

export default connect(mapState, mapDispatch)(SingleSuperiorPage);
