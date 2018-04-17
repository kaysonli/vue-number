<template>
  <input
    :placeholder="placeholder"
    :value="value"
    @blur="onBlur"
    @input="onInput"
    @focus="onFocus"
    ref="numeric"
    type="text"
    v-model="inputValue"
  >
</template>

<script>
import accounting from 'accounting-js'

export default {
  name: 'vue-number',

  props: {
    /**
     * Currency symbol.
     */
    currency: {
      default: '',
      required: false,
      type: String
    },

    /**
     * Maximum value allowed.
     */
    max: {
      required: false,
      type: [Number, String]
    },

    /**
     * Minimum value allowed.
     */
    min: {
      default: 0,
      required: false,
      type: [Number, String]
    },

    /**
     * Enable/Disable minus value.
     */
    minus: {
      default: false,
      required: false,
      type: Boolean
    },

    /**
     * Input placeholder.
     */
    placeholder: {
      required: false,
      type: String
    },

    /**
     * Number of intergral part.
     */
    integral: {
      default: 9,
      required: false,
      type: [Number, String]
    },

    /**
     * Number of decimals.
     */
    precision: {
      default: 2,
      required: false,
      type: [Number, String]
    },

    /**
     * value of input
     */
    value: {
      required: true,
      type: [Number, String]
    },

    /**
     * Hide input and show value in text only.
     */
    readOnly: {
      default: false,
      required: false,
      type: Boolean
    },

    /**
     * Class for the span tag when readOnly props is true.
     */
    readOnlyClass: {
      default: '',
      required: false,
      type: String
    },

    /**
     * Position of currency symbol
     * Symbol position props accept either 'suffix' or 'prefix' (default).
     */
    currencySymbolPosition: {
      default: 'prefix',
      required: false,
      type: String
    }
  },

  data: () => ({
    amount: '',
    inputValue: '',
    inputNaN: false,
    rawValue: '',
    editing: false,
  }),

  computed: {

    /**
     * Define format for currency symbol and value.
     * @return {String} format
     */
    formatString () {
      return this.currencySymbolPosition === 'suffix' ? '%v %s' : '%s %v'
    },
  },

  methods: {
    /**
     * Check provided value againts maximum allowed.
     * @param {Number} value
     * @return {Boolean}
     */
    checkMaxValue (value) {
      if (this.max) {
        if (value <= this.maxValue) return false
        return true
      }
      return false
    },

    /**
     * Check provided value againts minimum allowed.
     * @param {Number} value
     * @return {Boolean}
     */
    checkMinValue (value) {
      if (this.min) {
        if (value >= this.minValue) return false
        return true
      }
      return false
    },
    /**
     * textInput event hanlder to check if non-numeric value is typed.
     * @param {evt} event object
     */
    onTextInput (evt) {
      this.inputNaN = isNaN(evt.data);
    },
    /**
     * Blur event handler. Change input type to 'text'.
     */
    onBlur() {
      this.editing = false;
      this.$refs.numeric.type = 'text';
      this.inputValue = this.format(this.rawValue);
    },
    /**
     * Focus event handler. Change input type to 'number'.
     */
    onFocus() {
      this.$refs.numeric.type = 'number';
      this.inputValue = this.rawValue;
      this.editing = true;
    },
    onInput(evt) {
      if (evt.target.value === '') {
        this.$refs.numeric.value = '';
      }
      this.inputValue = evt.target.value;
    },
    update(val) {
      if (isNaN(val)) {
        return;
      }
      this.inputValue = this.format(val);
      this.rawValue = this.value;
    },
    format(value) {
      var amount = accounting.formatMoney(value, {
        symbol: this.currency,
        format: this.formatString,
        precision: Number(this.precision),
      })
      return amount;
    },
  },

  watch: {
    /**
     * When readOnly is true, replace the span tag class.
     *
     * @param {Boolean} val
     * @param {Boolean} oldVal
     */
    readOnly (val, oldVal) {
      if (oldVal === false && val === true) {
        this.$nextTick(() => {
          this.$refs.readOnly.className = this.readOnlyClass
        })
      }
    },

    inputValue(val, oldVal) {
      var numberReg = new RegExp(`^-?\\d{0,${this.integral}}(\\.\\d{0,${this.precision}})?$`);
      if (this.editing) {
        if (!numberReg.test(val) || (+oldVal && !isNaN(+oldVal) && !val && this.inputNaN)) {
          this.inputNaN = false;
          this.$nextTick(() => {
            this.inputValue = oldVal;
          });
        } else {
          this.rawValue = val;
          this.$emit('input', this.rawValue);
        }
      }
    },

    value(val) {
      if (val === '') {
        this.inputValue = '';
      }
    },
  },

  mounted () {
    this.$refs.numeric.addEventListener('textInput', this.onTextInput.bind(this));
    if (typeof this.value === 'string' || this.value instanceof String) {
        this.value.replace(/,/g, "");
    }
    this.update(parseInt(this.value));
  }
}
</script>
