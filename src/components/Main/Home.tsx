
import Card from "../Card/Card.tsx";

export default function Home() {
    return (
        <>
            <div>
                <h1>Начните заниматься спортом и улучшите качество жизни</h1>
                <div>
                    <div>Измени своё тело за полгода!</div>
                    <div>
                        <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.31047 34.7255C1.70859 35.9972 -0.543649 34.3288 0.206143 32.4259L12.4832 1.26757C12.9654 0.043736 14.4775 -0.389332 15.5345 0.393651L29.4865 10.7288C30.5434 11.5118 30.5697 13.0844 29.5395 13.9023L3.31047 34.7255Z" fill="#BCEC30" />
                        </svg>
                    </div>
                </div>
            </div>
            <Card />
        </>
    )
}