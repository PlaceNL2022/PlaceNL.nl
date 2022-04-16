import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import Spinner from '../../design/Spinner';

export default class OrderHistoryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        document.title = 'Ordergeschiedenis - Place NL';

        fetch('https://2022-order-history.placenl.nl/data.min.json').then(async (res) => {
            const data = await res.json();

            //data.mapHistory.reverse();

            this.setState({
                data
            });
        }).catch((reason) => {
            this.setState({
                error: `Er is een fout opgetreden. Probeert het later opnieuw. Foutmelding: ${reason}.`
            });
        })
    }

    getMapHistoryContents() {
        var i = 0;
        return this.state.data.mapHistory.map((entry) => {
            // Skip first empty canvas.
            if (i++ === 0) return;
            return <div className='md:flex gap-2 mb-5 mt-5' id={entry.file}>
                <LazyLoadImage alt={entry.reason} placeholder={<Spinner />} src={`https://2022-order-history.placenl.nl/maps/${entry.file}`} width={512} height={entry.date >= 1648918955127 && entry.date <= 1649011535759 ? 256 : 512} className='max-w-full border-2 border-white rounded' />
                <div>
                    <h5 className='text-gray-400'>{new Date(entry.date).toLocaleString()}</h5>
                    <h3 className='text-2xl'>{entry.reason}</h3>
                    <p>
                        <a href={`https://2022-order-history.placenl.nl/maps/${entry.file}`} download={entry.file} className='text-blue-400'><FontAwesomeIcon icon={faDownload} /> Template downloaden</a>
                        <br />
                        <a href={`https://2022-order-history.placenl.nl/maps/${entry.file}`} rel='noreferrer' target='_blank' className='text-blue-400'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Template openen (in nieuw tablad)</a>
                    </p>
                </div>
            </div>
        });
    }

    render() {
        if (this.state.error) {
            return <div className='m-auto w-5/6 md:w-3/4'>
                <div className='p-3 rounded border-2 border-red-500'>
                    {this.state.error}
                </div>
            </div>;
        }

        if (!this.state.data) {
            return <div className='m-auto w-5/6 md:w-3/4'>
                <div class="flex justify-center items-center">
                    <Spinner />
                </div>
            </div>;
        }

        return <div className='m-auto w-5/6 md:w-3/4'>
            <h1 className='text-2xl'>Ordergeschiedenis</h1>
            <p>
                Op deze pagina kan je alle templates zien die naar de scripts van r/placeNL zijn gepushed, hoe laat ze zijn gepushed en waarom.
                Deze orders / templates werden door zowel scripters als niet-scripters bekeken en gebruikt.
            </p>
            {this.getMapHistoryContents()}
        </div>;
    }
}
