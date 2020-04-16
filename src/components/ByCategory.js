import React from "react";
import './ByCategory.scss';

import mr from '../assets/images/mr.png'
import abilities from '../assets/images/abilities.png'
import ux from '../assets/images/ux.png'
import audio from '../assets/images/audio.png'
import cinema from '../assets/images/cinema.png'
import motioncapture from '../assets/images/motioncapture.png'
import productDesign from '../assets/images/productDesign.png'

const ByCategory = () => {
  return (
    <>
      <div className={"sectionsMainTitle"}>Areas of work</div>
      <div className={"categoriesThumbnailsContainer"}>

          <div className={'categoryEntry'}>
              <div className={'categoryEntryImage'}>
                  <img src={mr} alt={'Virtual / Mixed Reality projects'}/>
              </div>
              <div className={'categoryEntryTitle'}>Virtual / Mixed Reality</div>
          </div>

          <div className={'categoryEntry'}>
              <div className={'categoryEntryImage'}>
                  <img src={abilities} alt={'Ability projects'} />
              </div>
              <div className={'categoryEntryTitle'}>Abilities</div>
          </div>

          <div className={'categoryEntry'}>
              <div className={'categoryEntryImage'}>
                  <img src={ux} alt={'UX projects'} />
              </div>
              <div className={'categoryEntryTitle'}>User Experience Design</div>
          </div>

          <div className={'categoryEntry'}>
              <div className={'categoryEntryImage'}>
                  <img src={audio} alt={'Audio projects'} />
              </div>
              <div className={'categoryEntryTitle'}>Audio</div>
          </div>

          <div className={'categoryEntry'}>
              <div className={'categoryEntryImage'}>
                  <img src={cinema} alt={'Cinema'} />
              </div>
              <div className={'categoryEntryTitle'}>Cinema</div>
          </div>
          <div className={'categoryEntry'}>
              <div className={'categoryEntryImage'}>
                  <img src={motioncapture} alt={'Motion Capture projects'} />
              </div>
              <div className={'categoryEntryTitle'}>Motion Capture</div>
          </div>
          <div className={'categoryEntry'}>
              <div className={'categoryEntryImage'}>
                  <img src={productDesign} alt={'Product Design projects'} />
              </div>
              <div className={'categoryEntryTitle'}>ProductDesign</div>
          </div>

      </div>
    </>
  );
};

export default ByCategory;
