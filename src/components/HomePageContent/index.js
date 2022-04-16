import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomePageContent() {
    return (
        <section className={styles.content}>
            <p><em>Camping Training</em> is being developed as an adventure. A reference application that means nothing to anyone, other than the people that are building it.</p>
            <p>We will document the process, the decisions we make, as well as the mistakes.</p>
            <p>A big part of what we are trying to do here:</p>
            <ul>
                <li>Help bridge the gap between developers focused on either the frontend or the backend.</li>
                <li>Explore UI/UX, while keeping things accessible.</li>
                <li>Have a place we can "show off" where the source code can be shared.</li>
                <li>Promote discussion about how to <em>best</em> accomplish something, without being beholden to those irksome "business requirements".</li>
                <li>And perhaps most importantly, have a set of code we can reference as we build stuff that matters more.</li>
            </ul>
        </section>
    )
}