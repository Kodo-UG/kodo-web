(function (root, factory) {
	if (typeof define === "function" && define.amd) {
		define(factory);
	} else if (typeof exports === "object") {
		module.exports = factory();
	} else {
		root.Sparkline = factory();
	}
})(window, function () {
	function extend(specific, general) {
		var obj = {};
		for (var key in general) {
			obj[key] = key in specific ? specific[key] : general[key];
		}
		return obj;
	}

	function Sparkline(element, options) {
		if (!element) {
			throw new Error("Invalid element provided for Sparkline");
		}

		this.element = element;
		this.options = extend(options || {}, Sparkline.options);

		this.init();
	}

	Sparkline.options = {
		width: 100,
		height: null,
		lineColor: "black",
		lineWidth: 1.5,
		startColor: "transparent",
		endColor: "black",
		maxColor: "transparent",
		minColor: "transparent",
		minValue: null,
		maxValue: null,
		minMaxValue: null,
		maxMinValue: null,
		dotRadius: 2.5,
		tooltip: null,
		fillBelow: true,
		fillLighten: 0.5,
		startLine: false,
		endLine: false,
		minLine: false,
		maxLine: false,
		bottomLine: false,
		topLine: false,
		averageLine: false,
	};

	Sparkline.init = function (element, options) {
		return new Sparkline(element, options);
	};

	Sparkline.draw = function (element, points, options) {
		var sparkline = new Sparkline(element, options);
		sparkline.draw(points);
		return sparkline;
	};

	Sparkline.prototype.init = function () {
		this.element.innerHTML = "<canvas></canvas>";
		this.canvas = this.element.firstChild;
		this.context = this.canvas.getContext("2d");
		this.ratio = window.devicePixelRatio || 1;

		if (this.options.tooltip) {
			this.canvas.style.position = "relative";
			this.canvas.onmousemove = this.showTooltip.bind(this);
		}
	};

	// Rest of the code...

	return Sparkline;
});
