import React                                 from 'react';
import ImageGallery, {ReactImageGalleryItem} from 'react-image-gallery';
import feat                                  from '../assets/images/appSlide/Featured.png';
import live                                  from '../assets/images/appSlide/livegif.gif';
import local                                 from '../assets/images/appSlide/local.png';
import splash                                from '../assets/images/appSlide/Splash.png';
import welcome                               from '../assets/images/appSlide/welcome.png';

const images: ReactImageGalleryItem[] = [
	{
		original: live,
		thumbnail: live,
	},
	{
		original: splash,
		thumbnail: splash,
	},
	{
		original: welcome,
		thumbnail: welcome,
	},
	{
		original: feat,
		thumbnail: feat,
	},
	{
		original: local,
		thumbnail: local,
	},
];

const ShowCase = () => {
	return (
		<div className="slideShow">
			<ImageGallery items={images}/>
		</div>
	);
};

export default ShowCase;
