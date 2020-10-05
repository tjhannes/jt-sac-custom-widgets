(function() { 
	let template = document.createElement("template");
	template.innerHTML = `
		<style>
		:host {
			display: block;
		} 
		
		.metric svg {
		  max-width: 100%;
		}
		
		.metric text {
		  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
		  fill: #000000;
		}
		
		.metric.participation text {
		  
		}		
		</style>

		
		
		<div class="container">
		  <div class="row">
		    <div class="col-md-4 col-sm-4">
		      <div class="metric" data-ratio=".95">
		        <svg viewBox="0 0 510 150">

		        	
	
		        	<text id="title" y="46.226601" x="255" text-anchor="middle" alignment-baseline="middle" font-size="30">Wie #besonders bist du?</text>	

		            <rect transform="scale(1,-1)" style="display:inline;fill:#cccccc;fill-opacity:1;stroke-width:1.25286" id="rect871" width="510.00043" height="79.891632" x="0" y="-146.91602" />
		            
		            <g id="rectBlue">
		            <rect y="66" x="0" height="81" width="510.00043" id="rect1" style="display:inline;fill:#6785c1;fill-opacity:1;stroke-width:1.26025" />
		            </g>

		            <g id="rectRed">
		            <rect y="66" x="80" height="81" width="0" id="rect3" style="display:inline;fill:#e23b3b;fill-opacity:1;stroke-width:1.26025" />
		            </g>

		            <path inkscape:label="DATA" d="m 438.40021,65.066817 v 83.697803 h 73.89862 V 65.066817 Z m 4.38544,5.206621 h 41.01072 c 17.20941,0 23.18415,6.555911 23.18415,24.648738 v 47.261304 h -48.5247 c -13.05289,0 -19.55089,-5.89219 -19.55089,-20.55473 v -3.40084 c 0,-14.2675 6.27607,-20.564578 18.87334,-20.564578 h 33.06662 v -2.563926 c 0,-6.850788 -2.27937,-9.538906 -8.12672,-9.538906 h -39.93252 z m 17.36307,41.869572 c -2.52166,0 -5.23189,1.08166 -5.23189,7.25658 0,6.18109 2.7662,7.41215 5.23189,7.41215 h 30.69617 v -14.66873 z" style="fill:#ffffff;fill-opacity:1;stroke-width:1.00688" id="rect904" />
		            <path inkscape:label="DAT" d="M 373.46927,65.066817 V 150.2529 h 65.33738 V 65.066817 Z m 1.24691,5.205871 h 62.97262 v 15.160819 h -23.25436 v 56.740843 h -16.4639 V 85.433507 h -23.25436 z" style="fill:#ffffff;fill-opacity:1;stroke-width:1.01233" id="rect900" />
		            <path inkscape:label="DA" d="m 300.33672,65.066817 v 83.400923 h 74.19844 V 65.066817 Z m 6.87869,5.302173 h 41.69333 c 17.49167,0 23.56441,6.676225 23.56441,25.101092 v 48.128648 h -49.32057 c -13.27579,0 -19.87954,-6.00033 -19.87954,-20.93195 v -3.46326 c 0,-14.52933 6.35386,-20.941976 19.15694,-20.941976 h 33.6429 v -2.610979 c 0,-6.976514 -2.31625,-9.713965 -8.29395,-9.713965 h -40.56352 z m 17.65784,42.63797 c -2.57264,0 -5.3197,1.1015 -5.3197,7.38975 0,6.29453 2.81276,7.54818 5.3197,7.54818 h 31.19963 v -14.93793 z" style="fill:#ffffff;fill-opacity:1;stroke-width:1.02438" id="rect896" />
		            <path inkscape:label="D" d="m 221.06906,65.066817 v 83.400923 h 80.86649 V 65.066817 Z m 9.23853,5.259127 h 44.16882 c 16.64452,0 23.99991,6.383981 23.99991,25.258034 v 21.599772 0.002 c 0,16.54662 -5.5846,25.2778 -23.22656,25.2778 h -44.94217 z m 16.51683,15.342575 v 41.432661 h 26.55856 c 5.92241,0 8.25841,-2.69954 8.25841,-9.57552 V 95.30531 c 0,-6.940714 -2.336,-9.636791 -8.25841,-9.636791 z" style="fill:#ffffff;fill-opacity:1;stroke-width:1.01489" id="rect892" />
		            <path id="LetterNTT" d="m 145.41225,65.066817 v 83.400923 h 77.07799 V 65.066817 Z m 2.47758,5.206773 h 63.72034 V 85.437037 H 188.09526 V 142.18771 H 171.40474 V 85.437037 h -23.51491 z" style="display:inline;fill:#ffffff;fill-opacity:0.989276;stroke-width:1.01808" id="rect888" />
		            <path id="LetterNT" d="M 80.330778,65.066817 V 148.17087 H 147.50977 V 65.066817 Z m 1.101425,5.206927 H 144.71629 V 85.437638 H 121.34891 V 142.18999 H 104.80158 V 85.437638 H 81.432203 Z" style="display:inline;fill:#ffffff;fill-opacity:1;stroke-width:1.01493" id="rect884" />		            		           
		            <path id="LetterN" d="M 0.1579093,65.066817 V 149.65719 H 81.751958 V 65.066817 Z m 20.3662777,4.440208 c 7.212662,0 10.977695,3.368342 14.08203,8.181401 2.70863,4.195818 24.665691,46.705614 25.008051,47.353674 0.342122,0.6174 0.805905,1.05172 1.275496,0.77384 0.404303,-0.22224 0.404667,-0.98747 0.404667,-1.7623 -0.06219,-0.95708 -0.245974,-5.7128 -0.245974,-8.9513 V 70.271016 h 16.202567 v 53.753094 c 0,15.99453 -7.930404,18.95801 -14.651341,18.95801 -7.212105,0 -11.009828,-3.33426 -14.091949,-8.18731 C 44.154181,128.03677 23.786948,88.03319 23.475878,87.409624 23.133836,86.823049 22.66333,86.38719 22.234105,86.671232 c -0.407408,0.216073 -0.437699,0.956823 -0.406651,1.756391 0.03424,0.957079 0.218203,5.745669 0.218203,8.95327 V 142.21025 H 5.8411064 V 88.459128 c 0,-16.019821 7.9624616,-18.952103 14.6830806,-18.952103 z" style="display:inline;fill:#ffffff;fill-opacity:1;stroke-width:1.01189" id="rect880" />		        
		            
		            <rect id="hiddenLetterN" y="66" x="0" height="81" width="80" style="display:inline;fill:#e23b3b;fill-opacity:0;stroke-width:1.26025" />
		        	<rect id="hiddenLetterNT" y="66" x="80" height="81" width="67" style="display:inline;fill:#e23b3b;fill-opacity:0;stroke-width:1.26025" />
		        	<rect id="hiddenLetterNTT" y="66" x="147" height="81" width="77" style="display:inline;fill:#e23b3b;fill-opacity:0;stroke-width:1.26025" />
		        	<rect id="hiddenLetterDATA" y="66" x="224" height="81" width="286" style="display:inline;fill:#e23b3b;fill-opacity:0;stroke-width:1.26025" />		            

		        	<g id="rectInfo">
		        	</g>

				</svg>
		      </div>
		    </div>
		  </div>
		</div>
	
	`;

	class Box extends HTMLElement {
		constructor() {
			super(); 
			let shadowRoot = this.attachShadow({mode: "open"});
			shadowRoot.appendChild(template.content.cloneNode(true));
			
			this.$style = shadowRoot.querySelector('style');			
			this.$svg = shadowRoot.querySelector('svg');
			this.$rectBlue = shadowRoot.querySelector('#rectBlue');
			this.$letterN = shadowRoot.querySelector('#hiddenLetterN');
			this.$letterNT = shadowRoot.querySelector('#hiddenLetterNT');
			this.$letterNTT = shadowRoot.querySelector('#hiddenLetterNTT');
			this.$letterDATA = shadowRoot.querySelector('#hiddenLetterDATA');
			this.$rectRed = shadowRoot.querySelector('#rectRed');
			this.$rectInfo = shadowRoot.querySelector('#rectInfo');
			
			this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
			});

			this.$letterNTT.addEventListener("mouseover", mouseOver);

			this.$letterN.addEventListener("mouseover", event => {
				var event = new Event("mouseOverN");
				this.dispatchEvent(event);
			});
			this.$letterN.addEventListener("mouseout", event => {
				var event = new Event("mouseOutN");
				this.dispatchEvent(event);
			});

			this.$letterNT.addEventListener("mouseover", event => {
				var event = new Event("mouseOverNT");
				this.dispatchEvent(event);
			});
			this.$letterNT.addEventListener("mouseout", event => {
				var event = new Event("mouseOutNT");
				this.dispatchEvent(event);
			});

			this.$letterNTT.addEventListener("mouseover", event => {
				var event = new Event("mouseOverNTT");
				this.dispatchEvent(event);
			});
			this.$letterNTT.addEventListener("mouseout", event => {
				var event = new Event("mouseOutNTT");
				this.dispatchEvent(event);
			});

			this.$letterDATA.addEventListener("mouseover", event => {
				var event = new Event("mouseOverDATA");
				this.dispatchEvent(event);
			});
			this.$letterDATA.addEventListener("mouseout", event => {
				var event = new Event("mouseOutDATA");
				this.dispatchEvent(event);
			});



			// x values of letters: 0 80 67 77 

			function mouseOver(){
				console.log("mouseOver by EventListener. "+ this.$rectRed);
				//this.$rectRed.innerHTML = '<rect y="66" x="0" height="81" width="80" id="rect3" style="display:inline;fill:#e23b3b;fill-opacity:1;stroke-width:1.26025" />';
			};

			

			this._props = {};
		}
		
		render(val, info, color, fill) {

			// 0 -> 143 4 && 100 -> 66 81
			var y = 143 - val*0.77; 
			var height = val*0.81;
			

			if(val >= 0 && val <= 100){
				//console.log(this.$rectBlue); 											
				this.$rectBlue.innerHTML = '<rect y="'+ y +'" x="0" height="'+ height +'" width="510.00043" id="rectBlue" style="display:inline;fill:#6785c1;fill-opacity:1;stroke-width:1.26025" />';
				console.log(this.$rectBlue);
			}

			if(fill==0){
				this.$rectRed.innerHTML = '<rect y="66" x="0" height="81" width="0" id="rect3" style="display:inline;fill:#e23b3b;fill-opacity:1;stroke-width:1.26025" />';
				this.$rectInfo.innerHTML = '';
			} else if (fill==1) {
				this.$rectRed.innerHTML = '<rect y="66" x="0" height="81" width="80" id="rect3" style="display:inline;fill:#e23b3b;fill-opacity:1;stroke-width:1.26025" />';
			} else if (fill==2) {
				this.$rectRed.innerHTML = '<rect y="66" x="80" height="81" width="67" id="rect3" style="display:inline;fill:#e23b3b;fill-opacity:1;stroke-width:1.26025" />';
			} else if (fill==3) {
				this.$rectRed.innerHTML = '<rect y="66" x="147" height="81" width="77" id="rect3" style="display:inline;fill:#e23b3b;fill-opacity:1;stroke-width:1.26025" />';
			} else if (fill==4) {
				this.$rectInfo.innerHTML = '<rect y="77.081451" x="236.10083" height="59.779549" width="264.29086" id="rect18" style="fill:#ffffff;fill-opacity:0.284182;stroke-width:1.183" /><text id="text22" y="95.717781" x="241.79979" style="font-style:normal;font-weight:normal;font-size:16px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none" xml:space="preserve"><tspan style="font-size:16px" y="95.717781" x="241.79979" id="tspan20" sodipodi:role="line">NTT DATA is a leading IT </tspan><tspan id="tspan24" style="font-size:16px" y="115.71778" x="241.79979" sodipodi:role="line">consulting firm with origins in</tspan><tspan id="tspan30" style="font-size:16px" y="135.71777" x="241.79979" sodipodi:role="line">Japan and since 1729 a.d.   </tspan></text>';
			}


		}
		  

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = { ...this._props, ...changedProperties };
		}

		onCustomWidgetAfterUpdate(changedProperties) {
			if ("value" in changedProperties) {
				this.$value = changedProperties["value"];
			}
			
			if ("info" in changedProperties) {
				this.$info = changedProperties["info"];
			}
			
			if ("color" in changedProperties) {
				this.$color = changedProperties["color"];
			}

			if ("fill" in changedProperties) {
				this.$fill = changedProperties["fill"];
			}
			
			this.render(this.$value, this.$info, this.$color, this.$fill);
		}
	}
	
	customElements.define("com-logo", Box);
})();
