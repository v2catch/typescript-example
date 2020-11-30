import React, { FC, useRef, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import ReactPlayer from 'react-player';
import { useXMLFeed } from '../../Hooks/useXMLFeed';
import { AtomFeed, Item } from '../../Interfaces/AtomFeed';
import { PlayerButton } from '../../Components/PlayerButton';

import 'tailwindcss/tailwind.css';
import './App.scss';

const Component: FC = () => {

  const playerRef = useRef<any>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [selected, setSelected] = useState<Item>();

  const feed = useXMLFeed<AtomFeed>('https://feeds.simplecast.com/wjQvYtdl');

  return (
    <div className="bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 color-white">
      <div className="flex flex-row h-screen">
        <div className="flex flex-col w-screen flex-shrink-0  md:w-1/2 lg:w-1/2 overflow-y-scroll">
          {
            feed?.rss.channel.item.map( item => {
              return (
                <div
                  key={item.guid['#text']}
                  className="p-2 m-2 bg-white "
                >
                  <h2 className="text-lg">{item.title}</h2>
                  <button
                    type="button"
                    onClick={() => { setSelected(item); setPlaying(false); }}
                  >
                    Listen
                  </button>
                </div>
              );
            })
          }
        </div>
        <div className="p-4 flex-shrink">
          <img
            src={feed?.rss.channel.image.url}
            alt='podcast cover art'
            className={`max-w-md ${selected && 'hidden'}`}
          />
          <h1 className="text-4xl">{selected?.title || feed?.rss.channel.title}</h1>
          <p>{selected?.['itunes:summary'] || feed?.rss.channel.description}</p>

          <div className={`flex ${!selected && 'hidden'}`}>
            <PlayerButton
              onClick={() => {setPlaying(true);}}
            >
              Play
            </PlayerButton>
            <PlayerButton
              onClick={() => {setPlaying(false);}}
            >
              Pause
            </PlayerButton>
          </div>

          <ReactPlayer
            className="hidden"
            controls={false}
            ref={playerRef}
            url={selected?.enclosure['@attributes'].url}
            playing={playing}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        </div>
      </div>
    </div>
  );
};

const  App = hot(Component);
export { App };
