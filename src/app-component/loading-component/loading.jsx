import React ,{Component} from 'react'
import './loading.css'
class LoadingEffect extends Component
{
    render()
    {
        return(
            	<div class="row">
		<div id="loader">
    		<div class="dot"></div>
			<div class="dot"></div>
			<div class="dot"></div>
			<div class="dot"></div>
			<div class="dot"></div>
			<div class="dot"></div>
			<div class="dot"></div>
			<div class="dot"></div>
			<div class="lading"></div>
		</div>
	</div>


        );
    }
}
export default LoadingEffect;