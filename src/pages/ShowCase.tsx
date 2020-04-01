import React                                 from 'react';
import ImageGallery, {ReactImageGalleryItem} from 'react-image-gallery';
import feat                                  from '../assets/images/appSlide/Featured.png';
import local                                 from '../assets/images/appSlide/local.png';
import splash                                from '../assets/images/appSlide/Splash.png';

const images: ReactImageGalleryItem[] = [
	{
		original: splash,
		thumbnail: splash,
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
