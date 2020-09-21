(function() { 
	let template = document.createElement("template");
	template.innerHTML = `
		<style>
		:host {
			border-radius: 5px;
			display: block;
		} 
		
		.metric {
		  padding: 10%;
		}
		
		.metric svg {
		  max-width: 100%;
		}
		
		.metric text {
		  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
		}
		
		.metric.participation text {
		  fill: #27ae60;
		}		
		</style>
		
		<div class="container">
		  <div class="row">
		    <div class="col-md-4 col-sm-4">
		      <div class="metric participation" data-ratio=".95">
		        <svg viewBox="0 0 240 110">			     
				    <path
				       id="rect15"
				       style="fill:#000000;stroke-width:0.7767"
				       d="M 13.5,49.1562 H 38.595521 L 26.04433,61.03733 v 0 z"
				       sodipodi:nodetypes="ccccc" />
				    <rect
				       y="64.017868"
				       x="13.989609"
				       height="14.372756"
				       width="70.434731"
				       id="rect10"
				       style="fill:#ff0000;fill-rule:evenodd;stroke-width:0.289271" />
				    <rect
				       y="64.017868"
				       x="84.424347"
				       height="14.372756"
				       width="76.714249"
				       id="rect12"
				       style="fill:#ffff00;stroke-width:0.270705" />
				    <rect
				       y="64.01783"
				       x="161.13858"
				       height="14.372759"
				       width="62.698563"
				       id="rect14"
				       style="fill:#00ff00;stroke-width:0.306919" />
				    <text
				       xml:space="preserve"
				       style="font-style:normal;font-weight:normal;font-size:14.6268px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.097"
				       x="14.014945"
				       y="89.634277"
				       id="text20"
				       transform="scale(0.95629348,1.0457041)"><tspan
				         sodipodi:role="line"
				         id="tspan18"
				         x="14.014945"
				         y="89.634277"
				         style="font-size:14.6268px;stroke-width:1.097">0%</tspan></text>
				    <text
				       id="text20-4"
				       y="90.638199"
				       x="191.15619"
				       style="font-style:normal;font-weight:normal;font-size:14.6267px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.097"
				       xml:space="preserve"
				       transform="scale(0.95629348,1.0457041)"><tspan
				         style="font-size:14.6267px;stroke-width:1.097"
				         y="90.638199"
				         x="191.15619"
				         id="tspan18-7"
				         sodipodi:role="line">100%</tspan></text>
				    <text
				       transform="scale(0.95629347,1.0457041)"
				       xml:space="preserve"
				       style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:14.6267px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif Bold';fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.097"
				       x="124.78633"
				       y="24.227127"
				       id="text20-4-9"><tspan
				         sodipodi:role="line"
				         id="tspan18-7-5"
				         x="124.78633"
				         y="24.227127"
				         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:14.6267px;font-family:sans-serif;-inkscape-font-specification:sans-serif;text-align:center;text-anchor:middle;stroke-width:1.097">Low</tspan></text>
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
			
			this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
			});
			
			this._props = {};
		}
		
		render(val, info, color) {
			var val1 = val * 0.01; 
			var x = 13.5 + val1*186; // Intervall 13.5 - 199.5
			
			if(val >=0 && val <=100) {
				console.log("test");
				this.$style.innerHTML = '<style>:host {border-radius: 5px;display: block;} .metric {padding: 10%;}.metric svg {max-width: 100%;}.metric text {font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;}.metric.participation text {fill: ' + color + ';}</style>';
				this.$svg.innerHTML = '<path sodipodi:nodetypes="ccccc" d="m ' + x + ',49.1562 h 25.10251 l -12.55126,11.88113 v 0 z" style="fill:#000000;stroke-width:0.7767" id="rect15" /> <rect style="fill:#ff0000;fill-rule:evenodd;stroke-width:0.289271" id="rect10" width="70.434731" height="14.372756" x="13.989609" y="64.017868" /> <rect style="fill:#ffff00;stroke-width:0.270705" id="rect12" width="76.714249" height="14.372756" x="84.424347" y="64.017868" /> <rect style="fill:#00ff00;stroke-width:0.306919" id="rect14" width="62.698563" height="14.372759" x="161.13858" y="64.01783" /> <text transform="scale(0.95629348,1.0457041)" id="text20" y="89.634277" x="14.014945" style="font-style:normal;font-weight:normal;font-size:14.6268px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.097" xml:space="preserve"><tspan style="font-size:14.6268px;stroke-width:1.097" y="89.634277" x="14.014945" id="tspan18" sodipodi:role="line">0%</tspan></text> <text transform="scale(0.95629348,1.0457041)" xml:space="preserve" style="font-style:normal;font-weight:normal;font-size:14.6267px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.097" x="191.15619" y="90.638199" id="text20-4"><tspan sodipodi:role="line" id="tspan18-7" x="191.15619" y="90.638199" style="font-size:14.6267px;stroke-width:1.097">100%</tspan></text> <text id="text20-4-9" y="24.227127" x="124.78633" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:14.6267px;line-height:1.25;font-family:sans-serif;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.097" xml:space="preserve" transform="scale(0.95629347,1.0457041)"><tspan style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:14.6267px;font-family:sans-serif;text-align:center;text-anchor:middle;stroke-width:1.097" y="24.227127" x="124.78633" id="tspan18-7-5" sodipodi:role="line">' + info + '</tspan></text>';
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
			
			this.render(this.$value, this.$info, this.$color);
		}
	}
	
	customElements.define("com-linear-gauge", Box);
})();
