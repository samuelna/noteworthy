import { useDispatch, useSelector } from "react-redux";
import React from 'react';

import {NavLink} from 'react-router-dom';

const Tags = (props) => {
    const tagsObj = useSelector(state => Object.values(state.entities.tags));
    const dispatch = useDispatch();

    const tagBoxes = () => {
        return (tagsObj.map((tag, idx) => {
            let randNum = Math.floor(Math.random() * Math.floor(8));
            return (
                <div className={`tag__container tag__container--${randNum}`} key={idx}>
                    <NavLink 
                        to={`/main/tags/${tag.id}/notes`}
                        className="tag__link">
                        {tag.name}
                    </NavLink>

                    <h2 className="universal__h2 tag__numOfItems">{tag.note_ids.length} notes</h2>

                    <section className="tag__footer--container">
                        {/* <i className="far fa-edit" />
                        <i className="fas fa-trash-alt" /> */}
                    </section>
                </div>);
        }));
    }

    return (
        <div className="tags">
            <section className="tags__header">
                <i className="fas fa-tag tags__header--icon"></i>
                <h2 className="universal__h2">Tags</h2>
            </section>

            <section className="tags__grid">
                {tagBoxes()}
            </section>
        </div>

    );

};

export default Tags;