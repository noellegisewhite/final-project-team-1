import {React, useEffect, useState} from "react";
<<<<<<< HEAD
import Axios from 'axios';
import { getUsername } from "../../../utils/common";
import Quiz from "../../../Components/Quiz";
import style from './style.module.scss'
import Xmas from '../../../Assets/Images/xmas-orange.svg'
=======
>>>>>>> main

import Axios from 'axios';
import Quiz from "../../../Components/Quiz";
import { getUsername } from "../../../utils/common";
import style from './style.module.scss'

const PortalHome = () => {

    const userName = getUsername();
    const [showQuiz, setShowQuiz] = useState(false);
    const [discuss, setDiscuss] = useState(null);
    const [journals, setJournals] = useState(null);
    const [dates, setDates] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const journalData = await Axios(`http://localhost:8080/api/${userName}/journals`);
            const discussData = await Axios(`http://localhost:8080/api/${userName}/discuss`);
            const dateData = await Axios(`http://localhost:8080/${userName}/dateNight`);

            setJournals(journalData.data);
            console.log(journalData.data);
            setDiscuss(discussData.data);
            console.log(discussData.data);
            setDates(dateData.data);
            console.log(dateData.data);
        }

        if (journals && discuss && dates) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
        !journals && !discuss && !dates && fetchData() ;
        }, 1000);
        return () => clearTimeout(timer);

    }, [journals, discuss, dates]);

    return (
        <div className={style.portHomeMain}>
            <section className={style.portHome}>
                <div className={style.quizDiv}>
                <h4 className={style.quizH4}>Customize Your Experience</h4>
                <p className={style.quizP}>Answer the following questions about your relationship so we can tailor content to your unique preferences.</p>
                <button className={style.quizBtn} onClick={() => {setShowQuiz(true)}}>Start The Quiz</button>
                </div>
            </section>

            <section>
            {loading ? <h3>Loading...</h3> :
                <div>
                    <div className={style.dashDiv}>
                    <article className={style.dashCard1}>
                        <div className={style.dashCardIcon}>
                        <h5>Prompt Entries</h5>
                        <i className="uil uil-comment-question" />
                        </div>
                    <h2 className={style.dashCardNum}>{discuss.length}</h2>
                    <h2>Prompts Answered</h2>
                    </article>

                    <article className={style.dashCard2}>
                        <div className={style.dashCardIcon}>
                        <h5>Date Entries</h5>
                        <i className="uil uil-crockery" />
                        </div>
                    <h2 className={style.dashCardNum}>{dates.length}</h2>
                    <h2>Dates Gone On</h2>
                    </article>

                    <article className={style.dashCard3}>
                        <div className={style.dashCardIcon}>
                        <h5>Discuss Entries</h5>
                        <i class="uil uil-comment-alt-heart" />
                        </div>
                    <h2 className={style.dashCardNum}>{discuss.length}</h2>
                    <h2>Discussions Had</h2>
                    </article>

                    <article className={style.dashCard4}>
                        <div className={style.dashCardIcon}>
                        <h5>Journal Entries</h5>
                        <i class="uil uil-edit" />
                        </div>
                    <h2 className={style.dashCardNum}>{journals.length}</h2>
                    <h2>Thoughts Recorded</h2>
                    </article>
                    </div>

                    <table className={style.dashTable}>
                        <thead>
                            <tr>
                            <th>Date</th>
                            <th>Entry</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {journals.map(journal =>
                        <tr key={journal.id}>
                            <td>{journal.journalDate}</td>
                            <td>{(journal.journalEntry).slice(0,75)+'...'}</td>
                            <td><button>View</button></td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                        )}
                        {discuss.map(diss =>
                            <tr key={diss.discussId}>
                                <td>{diss.discussDate}</td>
                                <td>{(diss.discussAnswerOne).slice(0,75)+'...'}</td>
                                <td><button>View</button></td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                            )}
                        {dates.map(date =>
                            <tr key={date.dateNightId}>
                                <td>{date.dateDate}</td>
                                <td>{date.dateIdea}</td>
                                <td>{date.dateType}</td>
                                <td>{date.dateLevel}</td>
                                <td>{date.dateNotes}</td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                            )} 
                        </tbody>
                    </table>
                </div>
            }
            </section>

            {showQuiz && <Quiz quizShown={setShowQuiz} />}
            
        </div>
    )
}

export default PortalHome;