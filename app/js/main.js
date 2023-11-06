"use strict";
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
window.addEventListener('DOMContentLoaded', function () {
  (function () {
    var checkForm = function checkForm(_ref) {
      var form = _ref.form,
        _ref$errorClassName = _ref.errorClassName,
        errorClassName = _ref$errorClassName === void 0 ? 'error' : _ref$errorClassName;
      function validatInputs() {
        var inputs = _toConsumableArray(form.querySelectorAll('[data-form-control][required]'));
        var toggleError = function toggleError(element, className, type) {
          className = !className ? 'clr-unvalidate' : className;
          if (element) {
            var parent = element.closest('[data-form-control-parent]');
            var errorElem = parent && parent.querySelector('[data-form-control-text]');
            var inputOverlay = element.parentNode.querySelector('[data-js-form-control-overlay]');
            type === 'add' && (element.tagName === 'INPUT' ? (element.classList.add('clr-unvalidate-br'), inputOverlay && inputOverlay.classList.add('clr-unvalidate-br')) : element.classList.add(className), errorElem && errorElem.classList.add(className));
            type === 'remove' && (element.tagName === 'INPUT' ? (element.classList.remove('clr-unvalidate-br'), inputOverlay && inputOverlay.classList.remove('clr-unvalidate-br')) : element.classList.remove(className), errorElem && errorElem.classList.remove(className));
          }
        };
        var valid = [];
        var radioCheck = false;
        var checkboxCheck = false;
        var _loop = function _loop() {
          var input = inputs[i];
          var parent = input.closest('[data-js-radio-ischecked-next-inputs-validate]');
          if (input.getAttribute('type') === 'radio') {
            if (!input.checked && parent) {
              var parentInputs = parent.querySelectorAll('[data-form-control]');
              inputs = inputs.filter(function (item, index) {
                if (parentInputs[index]) {
                  if (parentInputs[index] !== item) {
                    return item;
                  } else {
                    return false;
                  }
                } else {
                  return item;
                }
              });
            }
          }
        };
        for (var i = 0; i < inputs.length; i++) {
          _loop();
        }
        inputs.forEach(function (i, j) {
          var checkAttr = '';
          if (i.getAttribute('type')) {
            checkAttr = i.getAttribute('type');
          } else {
            checkAttr = i.tagName;
          }
          switch (checkAttr) {
            case 'radio':
              // console.log(i.checked);
              if (!radioCheck) {
                var inputRadioName = i.getAttribute('name');
                var radioArray = form.querySelectorAll("input[name=\"".concat(inputRadioName, "\"]"));
                var someOneChecked = false;
                if (radioArray.length) {
                  for (var _i = 0; _i < radioArray.length; _i++) {
                    if (radioArray[_i].checked) {
                      someOneChecked = true;
                      break;
                    }
                  }
                  if (!someOneChecked) {
                    // toggleError(i, false, 'add');
                    radioCheck = false;
                    valid.push(i);
                    toggleError(i, false, 'add');
                  } else {
                    if (i.closest('[data-js-radio-text-input-validate]')) {}
                  }
                } else {
                  if (!i.checked) {
                    console.log('radio unchekec');

                    // toggleError(i, false, 'add');
                    radioCheck = false;
                    valid.push(i);
                    toggleError(i, false, 'add');
                  } else {
                    // toggleError(i, false, 'remove');
                    radioCheck = true;
                    toggleError(i, false, 'remove');
                  }
                }
              }
              break;
            case 'checkbox':
              if (!checkboxCheck) {
                if (!i.checked) {
                  // toggleError(i, false, 'add');
                  checkboxCheck = false;
                  valid.push(i);
                } else {
                  // toggleError(i, false, 'remove');
                  checkboxCheck = true;
                }
              }
              break;
            case 'text':
              var _thisVal = i.value;
              if (i.getAttribute('data-name') == 'name') {
                if (!isNaN(i.value)) {
                  _thisVal = '';
                }
              }
              if (_thisVal == '') {
                toggleError(i, false, 'add');
                valid.push(i);
              } else {
                toggleError(i, false, 'remove');
              }
              break;
            case 'tel':
              if (i.value == '' || isNaN(i.value)) {
                toggleError(i, false, 'add');
                valid.push(i);
              } else {
                toggleError(i, false, 'remove');
              }
              break;
            case 'email':
              var regEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
              if (i.value == '' || !regEmail.test(i.value)) {
                toggleError(i, false, 'add');
                valid.push(i);
              } else {
                toggleError(i, false, 'remove');
              }
              break;
            case 'select':
              if (i[select.selectedIndex].value == '') {
                toggleError(i, false, 'add');
                valid.push(i);
              } else {
                toggleError(i, false, 'remove');
              }
              break;
            default:
              if (i.value == '') {
                toggleError(i, false, 'add');
                valid.push(i);
              } else {
                toggleError(i, false, 'remove');
              }
              break;
          }
        });
        if (valid.length > 0) {
          // console.log(valid.length);
          return false;
        } else {
          return true;
        }
      }
      if (form) {
        return validatInputs();
      }
      return false;
    };
    try {
      var progress = document.querySelector('[data-js-progress]');
      var activeProgressItemIndex = 0;
      var progressItemFooterPrevHTML = "\n                <div class=\"pdl-15 pdr-15\">\n                    <button class=\"btn-reset d-block pdt-20 pdb-20\" type=\"button\" data-js-progress-footer-prev-button>\n                        <span class=\"d-block fts-16 ftw-300 lh-1-1875 pdt-10 pdr-10 pdb-10 pdl-10 mrt-10- mrr-10- mrb-10- mrl-10-\">\u041D\u0430\u0437\u0430\u0434</span>\n                    </button>\n                </div>\n            ";
      var progressItemFooterNextHTML = "\n                <div class=\"pdl-15 pdr-15\">\n                    <button class=\"btn btn--default mnh-53 fts-14 ftw-500 pdl-16 pdr-16 pdt-5 pdb-5 w-100-p d-flex justify-content-center align-items-center brtlr-6 brtrr-6 brbrr-6 brblr-6 mnw-237 bxshw-accent-2\" type=\"button\" data-js-progress-footer-next-button>\n                        <span class=\"d-flex justify-content-center align-items-center\">\n                            <span class=\"d-flex justify-content-center align-items-center mrl-9- mrr-9-\">\n                                <span class=\"pdl-9 pdr-9\">\n                                    <span class=\"d-block fts-15 ftw-500 ls-0-225-\">\u0414\u0430\u043B\u0435\u0435</span>\n                                </span>\n                            </span>\n                        </span>\n                    </button>\n                </div>\n            ";
      var progressItemFooterHTML = "\n                <div class=\"d-flex justify-content-center flex-column flex-sm-row pdt-17 pdt-lg-30\">\n                    <div class=\"mrl-15- mrr-15- d-flex flex-wrap justify-content-center align-items-center\" data-js-progress-item-footer-wrapper>\n                        \n                    </div>\n                </div>\n            ";
      var addButtonHTMLAndGetProgressItemFooterBlockElement = function addButtonHTMLAndGetProgressItemFooterBlockElement(progressItemElement, progressItemIndex) {
        var block = document.createElement('div');
        block.setAttribute('data-js-progress-item-footer', '');
        block.insertAdjacentHTML('afterbegin', progressItemFooterHTML);
        var footerWrapper = block.querySelector('[data-js-progress-item-footer-wrapper]');
        progressItemIndex === 0 && footerWrapper.insertAdjacentHTML('afterbegin', progressItemFooterNextHTML);
        progressItemIndex > 0 && (footerWrapper.insertAdjacentHTML('afterbegin', progressItemFooterNextHTML), footerWrapper.insertAdjacentHTML('afterbegin', progressItemFooterPrevHTML));
        progressItemElement.append(block);
      };
      if (progress) {
        var progressStartElement = progress.querySelector('[data-js-progress-start]');
        var progressFinishElements = progress.querySelectorAll('[data-js-progress-finish]');
        var progressWrapper = progress.querySelector('[data-js-progress-wrapper]');
        var progressCalculation = progress.querySelector('[data-js-progress-сalculation]');
        var progressCalculationOverlay = progress.querySelector('[data-js-progress-сalculation-overlay]');
        var progressCalculationPercent = progress.querySelector('[data-js-progress-сalculation-percent]');
        var progressItemsElements = progress.querySelectorAll('[data-js-progress-item]');
        if (progressItemsElements.length) {
          var showActiveProgressItem = function showActiveProgressItem() {
            if (activeProgressItemIndex < progressItemsElements.length) {
              console.log('activeProgressItemIndex', activeProgressItemIndex);
              console.log('progressItemsElements.length', progressItemsElements.length);
              var percent = activeProgressItemIndex === 0 ? 5 : (100 / progressItemsElements.length * activeProgressItemIndex).toFixed(0);
              progressCalculationOverlay && (progressCalculationOverlay.style.width = "".concat(percent, "%"));
              progressCalculationPercent && (progressCalculationPercent.textContent = "".concat(percent, "%"));
              percent > 70 ? progressCalculation.classList.add('clr-white') : progressCalculation.classList.remove('clr-white');
              progressItemsElements.length && (progressItemsElements.forEach(function (progressItem) {
                progressItem.classList.add('d-none');
                progressItem.classList.remove('d-flex');
              }), progressItemsElements[activeProgressItemIndex].classList.remove('d-none'), progressItemsElements[activeProgressItemIndex].classList.add('d-flex'));
            } else {
              progressStartElement && progressStartElement.classList.add('d-none');
              progressStartElement && progressStartElement.classList.remove('d-block');
              console.log('progressFinishElements', progressFinishElements);
              progressFinishElements.forEach(function (progressFinishElement) {
                progressFinishElement.classList.add('d-block');
                progressFinishElement.classList.remove('d-none');
              });
            }
          };
          showActiveProgressItem();
          progressItemsElements.forEach(function (progressItemElement, index) {
            var firstRadio = progressItemElement.querySelector('[data-form-control][type="radio"]');
            firstRadio && (firstRadio.checked = true);
            progressItemElement.setAttribute('data-fade-in', '');
            addButtonHTMLAndGetProgressItemFooterBlockElement(progressItemElement, index);
            var prevButton = progressItemElement.querySelector('[data-js-progress-footer-prev-button]');
            var nextButton = progressItemElement.querySelector('[data-js-progress-footer-next-button]');
            var number = progressItemElement.querySelector('[data-js-progress-number]');
            number && (number.textContent = "".concat(index + 1, "."));
            prevButton && prevButton.addEventListener('click', function () {
              activeProgressItemIndex !== 0 && activeProgressItemIndex > 0 && activeProgressItemIndex--;
              showActiveProgressItem();
            });
            nextButton && nextButton.addEventListener('click', function () {
              if (checkForm({
                form: progressItemElement,
                errorClassName: 'clr-accent'
              })) {
                activeProgressItemIndex < progressItemsElements.length && activeProgressItemIndex++;
                showActiveProgressItem();
              } else {}
            });
          });
        }
        progressWrapper && progressWrapper.classList.add('vsb-visb', 'opc-1');
        progressWrapper && progressWrapper.classList.remove('vsb-hidd', 'opc-0');
      }
    } catch (error) {
      console.log('error', error);
    }
  })();
  (function () {
    try {
      var tabs = document.querySelectorAll('[data-js-tabs]');
      tabs.length && tabs.forEach(function (tab) {
        var tabButtonItems = tab.querySelectorAll('[data-js-tab-button]');
        var tabContentItems = tab.querySelectorAll('[data-js-tab-content-item]');
        var hideTabContent = function hideTabContent() {
          tabContentItems.forEach(function (item) {
            item.classList.add('d-none');
            item.classList.remove('d-block');
          });
          tabButtonItems.forEach(function (tabButtonItem) {
            tabButtonItem.classList.remove('clr-accent-br');
            tabButtonItem.classList.remove('clr-accent-br-h');
            tabButtonItem.classList.remove('clr-accent');
            tabButtonItem.classList.add('clr-white');
            tabButtonItem.classList.add('clr-tra-br');
            tabButtonItem.classList.add('clr-white-br-h');
          });
        };
        var showTabContent = function showTabContent(i) {
          var tabButtonElement = tabButtonItems[i];
          var tabContentItemElement = tabContentItems[i];
          tabButtonElement && tabButtonElement.classList.add('clr-accent-br');
          tabButtonElement && tabButtonElement.classList.add('clr-accent-br-h');
          tabButtonElement && tabButtonElement.classList.add('clr-accent');
          tabButtonElement && tabButtonElement.classList.remove('clr-white');
          tabButtonElement && tabButtonElement.classList.remove('clr-tra-br');
          tabButtonElement && tabButtonElement.classList.remove('clr-white-br-h');
          tabContentItemElement && tabContentItemElement.classList.add('d-block');
          tabContentItemElement && tabContentItemElement.classList.remove('d-none');
        };
        hideTabContent();
        showTabContent(0);
        tabButtonItems.forEach(function (tabButtonItem, index) {
          tabButtonItem.addEventListener('click', function () {
            hideTabContent();
            showTabContent(index);
          });
        });
      });
    } catch (error) {
      console.log('error', error);
    }
  })();
  (function () {
    try {
      var items = document.querySelectorAll('[data-js-button-input-change-item]');
      items.length && items.forEach(function (item) {
        var buttons = item.querySelectorAll('[data-js-button-input-change]');
        var input = item.querySelector('[data-js-button-input-change-control]');
        var hideInfo = function hideInfo(i) {
          buttons.forEach(function (item) {
            item.classList.add('clr-secondary-2');
            item.classList.remove('clr-accent');
          });
        };
        var showActiveInfo = function showActiveInfo(i) {
          var button = buttons[i];
          if (button) {
            var name = button.getAttribute('data-js-input-name');
            var placeholder = button.getAttribute('data-js-input-placeholder');
            input.name = name;
            input.placeholder = placeholder;
            button.classList.add('clr-accent');
            button.classList.remove('clr-secondary-2');
          }
        };
        hideInfo();
        showActiveInfo(0);
        buttons.forEach(function (buttons, index) {
          buttons.addEventListener('click', function () {
            hideInfo();
            showActiveInfo(index);
          });
        });
      });
    } catch (error) {
      console.log('error', error);
    }
  })();
  (function () {
    try {
      /* This script supports IE9+ */
      (function () {
        /* Opening modal window function */
        function openModal() {
          /* Get trigger element */
          var modalTrigger = document.getElementsByClassName('jsModalTrigger');

          /* Set onclick event handler for all trigger elements */
          for (var i = 0; i < modalTrigger.length; i++) {
            modalTrigger[i].onclick = function (event) {
              event.preventDefault();
              var target = this.getAttribute('href').substr(1);
              var modalWindow = document.getElementById(target);
              modalWindow.classList.add('opc-1', 'vsb-visb');
              modalWindow.classList.remove('opc-0', 'vsb-hidd');
              document.body.style.overflow = 'hidden';
              document.body.style.marginRight = getScrollbarWidth() + 'px';
            };
          }
        }
        function closeModal() {
          /* Get close button */
          var closeButton = document.getElementsByClassName('jsModalClose');
          var closeOverlay = document.getElementsByClassName('jsOverlay');

          /* Set onclick event handler for close buttons */
          for (var i = 0; i < closeButton.length; i++) {
            closeButton[i].addEventListener('click', function (event) {
              var modalWindow = event.currentTarget.closest('[data-js-modal]');
              modalWindow && modalWindow.classList.remove('opc-1', 'vsb-visb');
              modalWindow && modalWindow.classList.add('opc-0', 'vsb-hidd');
              document.body.style.overflow = 'visible';
              document.body.style.marginRight = 0;
            });
          }

          /* Set onclick event handler for modal overlay */
          for (var i = 0; i < closeOverlay.length; i++) {
            closeOverlay[i].addEventListener('click', function (event) {
              var modalWindow = event.currentTarget.closest('[data-js-modal]');
              modalWindow && modalWindow.classList.remove('opc-1', 'vsb-visb');
              modalWindow && modalWindow.classList.add('opc-0', 'vsb-hidd');
              document.body.style.overflow = 'visible';
              document.body.style.marginRight = 0;
            });
          }
        }

        /* Handling domready event IE9+ */
        function ready(fn) {
          if (document.readyState != 'loading') {
            fn();
          } else {
            document.addEventListener('DOMContentLoaded', fn);
          }
        }

        /* Triggering modal window function after dom ready */
        ready(openModal);
        ready(closeModal);
      })();
    } catch (error) {
      console.log('error', error);
    }
  })();
  var checkFormControlLength = function checkFormControlLength() {
    var formControls = [].concat(_toConsumableArray(document.querySelectorAll('input')), _toConsumableArray(document.querySelectorAll('textarea')));
    var check = function check(control) {
      control && (control.value.length > 0 ? control.classList.add('cpltd') : control.classList.remove('cpltd'));
    };
    formControls && formControls.length && formControls.forEach(function (formControl) {
      formControl.addEventListener('keyup', function () {
        check(formControl);
      });
      formControl.addEventListener('scroll', function (event) {
        var label = event.target && event.target.parentNode.querySelector('[data-js-form-control-label]');
        event.target.scrollTop ? label && (label.style.opacity = '0') : label && (label.style.opacity = '1');
      });
      check(formControl);
    });
  };

  // checkFormControlLength();

  var getScrollbarWidth = function getScrollbarWidth() {
    var div = document.createElement('div');
    div.style.visibility = 'hidden';
    div.style.position = 'absolute';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  };
  (function () {
    try {
      var nav = document.getElementById('nav'),
        overlay = document.getElementById('overlay'),
        open = document.getElementById('hamburger'),
        close = document.getElementById('close');
      var navOpen = function navOpen() {
        nav && (nav.classList.remove('l-nav-w-'), nav.classList.add('l-nav-w'));
        overlay && (overlay.classList.remove('opc-0'), overlay.classList.remove('vsb-hidd'), overlay.classList.add('opc-0-2'), overlay.classList.add('vsb-vsb'));
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = getScrollbarWidth() + 'px';
      };
      var navClose = function navClose() {
        nav && (nav.classList.remove('l-nav-w'), nav.classList.add('l-nav-w-'));
        overlay && (overlay.classList.remove('opc-0-2'), overlay.classList.remove('vsb-vsb'), overlay.classList.add('opc-0'), overlay.classList.add('vsb-hidd'));
        setTimeout(function () {
          document.body.style.overflow = 'initial';
          document.body.style.marginRight = '0';
        }, 100);
      };
      open && open.addEventListener('click', navOpen);
      close && close.addEventListener('click', navClose);
      overlay && overlay.addEventListener('click', navClose);
    } catch (error) {
      console.log('error', error);
    }
  })();
  (function () {
    try {
      var toggleHTMLClass = function toggleHTMLClass(_ref2) {
        var element = _ref2.element,
          _ref2$onlyThisElement = _ref2.onlyThisElements,
          onlyThisElements = _ref2$onlyThisElement === void 0 ? [] : _ref2$onlyThisElement,
          _ref2$type = _ref2.type,
          type = _ref2$type === void 0 ? '' : _ref2$type,
          _ref2$checkHasActiveC = _ref2.checkHasActiveClass,
          checkHasActiveClass = _ref2$checkHasActiveC === void 0 ? false : _ref2$checkHasActiveC;
        var arrayElements = [];
        console.log('onlyThisElements', onlyThisElements);
        console.log('elementonlyThisElements', element);
        if (element || onlyThisElements.length) {
          var _type = element && element.getAttribute('data-js-toggle-class-type') || onlyThisElements[0] && onlyThisElements[0].getAttribute('data-js-toggle-class-type');
          if (_type) {
            arrayElements = document.querySelectorAll("[data-js-toggle-class-type=\"".concat(_type, "\"]"));
          } else {
            console.log('element', element);
            arrayElements = element && element.parentElement.querySelectorAll('[data-js-toggle-class]');
          }
        }
        console.log('arrayElements', arrayElements);
        if (checkHasActiveClass && onlyThisElements.length) {
          var result = false;
          onlyThisElements = onlyThisElements[0].getAttribute('data-js-toggle-class-type') && document.querySelectorAll("[data-js-toggle-class-type=\"".concat(onlyThisElements[0].getAttribute('data-js-toggle-class-type'), "\"]")) || onlyThisElements;
          console.log('123 onlyThisElements', onlyThisElements);
          onlyThisElements.forEach(function (element) {
            if (element) {
              var classes = element && element.getAttribute('data-js-toggle-class');
              var classesArray = classes && classes.split(',');
              if (classesArray && classesArray.length) {
                var toggleValues = classesArray[0].split('>');
                if (toggleValues && toggleValues.length && (element.classList.contains(toggleValues[1]) || element.hasAttribute('data-js-toggle-active'))) {
                  result = true;
                }
              }
            }
          });
          console.log('123 onlyThisElements result', result);
          return result;
        }
        var changeClassValueElements = function changeClassValueElements(classValueElements) {
          classValueElements && classValueElements.length && classValueElements.forEach(function (classValueElement) {
            var classes = classValueElement.getAttribute('data-js-toggle-class');
            var classesArray = classes && classes.split(',');
            console.log('javascript test', type);
            classesArray && classesArray.length && classesArray.forEach(function (classItem) {
              var toggleValues = classItem.split('>');
              if (toggleValues.length === 2) {
                if (type === 'remove') {
                  if (toggleValues[0] === '' || toggleValues[0] === ' ') {
                    classValueElement.classList.remove(toggleValues[1]);
                  } else {
                    if (classValueElement.classList.contains(toggleValues[1])) {
                      classValueElement.classList.remove(toggleValues[1]);
                      classValueElement.classList.add(toggleValues[0]);
                    }
                  }
                }
                if (type === 'add') {
                  if (toggleValues[0] === '' || toggleValues[0] === ' ') {
                    classValueElement.classList.add(toggleValues[1]);
                  } else {
                    if (classValueElement.classList.contains(toggleValues[0])) {
                      classValueElement.classList.remove(toggleValues[0]);
                      classValueElement.classList.add(toggleValues[1]);
                    }
                  }
                }
              }
            });
          });
        };
        changeClassValueElements(arrayElements);
      };
      var togglesItemContainers = document.querySelectorAll('[data-js-toggle]');
      togglesItemContainers.forEach(function (togglesItemContainer) {
        var toggleButtons = togglesItemContainer.querySelectorAll('[data-js-toggle-button]');
        toggleButtons.forEach(function (toggleButton) {
          toggleButton.addEventListener('click', function (event) {
            var _this = event.currentTarget;
            var parent = _this.closest('[data-js-toggle-button-parent]');
            var block = parent && parent.querySelector('[data-js-toggle-block]');
            var toggleClassElements = parent && parent.querySelectorAll('[data-js-toggle-class]');
            if (!block.classList.contains('active')) {
              block.classList.add('active');
              block.style.height = 'auto';
              var height = block.clientHeight + 'px';
              block.style.height = '0px';
              toggleClassElements.forEach(function (toggleClassElement) {
                toggleHTMLClass({
                  element: toggleClassElement,
                  type: 'add'
                });
              });
              setTimeout(function () {
                block.style.height = height;
              }, 0);
            } else {
              block.style.height = '0px';
              toggleClassElements.forEach(function (toggleClassElement) {
                toggleHTMLClass({
                  element: toggleClassElement,
                  type: 'remove'
                });
              });
              block.addEventListener('transitionend', function () {
                block.classList.remove('active');
              }, {
                once: true
              });
            }
          });
        });
      });
    } catch (error) {
      console.log('error', error);
    }
  })();
  var carousePhotos = new Swiper(".carousePhotos", {
    spaceBetween: 30,
    effect: "fade",
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    loop: true
  });
  var carouselYourBudget = new Swiper('#carouselYourBudget', {
    simulateTouch: false,
    watchSlidesVisibility: true,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '',
      prevEl: ''
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    mousewheel: {
      forceToAxis: true
    },
    touchReleaseOnEdges: true,
    keyboard: false,
    breakpoints: {
      0: {
        slidesPerView: 'auto'
      },
      767: {
        slidesPerView: 2
      }
    }
  });
  var carouselReviews = new Swiper('#carouselReviews', {
    simulateTouch: false,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    mousewheel: {
      forceToAxis: true
    },
    touchReleaseOnEdges: true,
    keyboard: false,
    breakpoints: {
      0: {
        slidesPerView: 'auto'
      },
      992: {
        slidesPerView: 3
      },
      1280: {
        slidesPerView: 4
      }
    }
  });
  try {
    var SelectBox = /*#__PURE__*/function () {
      function SelectBox(selector, settings) {
        _classCallCheck(this, SelectBox);
        this.selector = selector;
        this.settings = settings || {};
        this.init();
      }
      _createClass(SelectBox, [{
        key: "init",
        value: function init() {
          this.inputLabel = this.selector.dataset.selectboxLabel || false;
          var get_options = this.selector.querySelectorAll('option');
          this.id = Math.floor(Math.random() * 1000000);
          this.selector.dataset.selectboxId = this.id;
          this.options = [];
          this.callbacks = {};
          if (this.settings.on) {
            this.callbacks = this.settings.on;
          }
          if (get_options) {
            get_options.forEach(function (option) {
              this.options.push({
                value: option.value || option.innerHTML,
                label: option.innerHTML,
                selected: option.selected || false,
                disabled: option.disabled || false
              });
              if (option.selected) {
                this.selectedOption = {
                  value: option.value || option.innerHTML,
                  label: option.innerHTML,
                  selected: true
                };
              }
            }.bind(this));
          }
          if (this.options.length) {
            this.render();
            this.initTargets();
            this.initEvents();
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _items_html = '';
          this.options.map(function (item) {
            var _item_classes = ['selectbox_list_item tra-0-3s-ease'];
            if (item.selected) {
              _item_classes.push('selected');
            }
            if (item.disabled) {
              _item_classes.push('disabled');
            }
            _items_html += "<li class=\"".concat(_item_classes.join(' '), "\" data-value=\"").concat(item.value, "\" data-disabled=\"").concat(item.disabled ? 1 : 0, "\">").concat(item.label, "</li>");
            return item;
          });
          var _selected = this.selectedOption || this.options[0];
          var _html = "\n                        <div class=\"selectbox_wrapper\" id=\"selectbox_".concat(this.id, "\">\n                            <div class=\"selectbox_input p-rel mnh-42 mnh-lg-60 br-0 w-100-p pdl-59 pdr-54 br-0 bg-tra brtlr-8 brtrr-8 brbrr-8 brblr-8 clr-black-2 p-rel z-i-10 aprc-none fts-10 fts-lg-14 ftw-300 d-flex align-items-center\">\n                                ").concat(this.inputLabel ? "<span class=\"selectbox_input_label mnw-0\">".concat(this.inputLabel, "</span>") : '', "\t\t\t\t\t\n                                <span class=\"selectbox_input_value\" data-value=\"").concat(_selected.value, "\">").concat(_selected.label, "</span>\n                                \n                                <span class=\"d-block bg-clr-secondary-9 w-100-p h-100-p p-abs l-0 t-0 r-0 b-0 z-i-1- brtlr-8 brtrr-8 brbrr-8 brblr-8 brw-2-f tra-0-2s-ease\" data-js-form-control-overlay></span>\n                                <span class=\"d-flex align-items-center p-abs l-19 t-0 b-0\">\n                                    <i class=\"icon-gift fts-24 clr-secondary-10\"></i>\n                                </span>\n                                <span class=\"d-flex align-items-center p-abs r-21 t-0 b-0 tra-0-3s-ease\" data-js-select-arrow>\n                                    <i class=\"icon-arrow-bottom fts-16 fts-lg-19 clr-secondary-2\"></i>\n                                </span>\n                            </div>\n                            <ul class=\"selectbox_list text-left bg-clr-secondary-9 brtlr-8 brtrr-8 brbrr-8 brblr-8 tra-0-2s-ease\">").concat(_items_html, "</ul>\n                        </div>\n                        ");
          this.selector.insertAdjacentHTML('afterEnd', _html);
          this.selector.style.display = 'none';
        }
      }, {
        key: "initTargets",
        value: function initTargets() {
          this.selectBox = this.selector.nextElementSibling;
          this.selectBoxInput = this.selectBox.querySelector('.selectbox_input');
          this.selectBoxInputValue = this.selectBoxInput.querySelector('.selectbox_input_value');
          this.selectBoxList = this.selectBox.querySelector('.selectbox_list');
          this.selectBoxListItems = this.selectBoxList.querySelectorAll('.selectbox_list_item');
        }
      }, {
        key: "initEvents",
        value: function initEvents() {
          this.selectBoxInput.addEventListener('click', this.onClick.bind(this));
          this.selectboxOpenEvent = new CustomEvent('selectbox_open');
          this.selectBox.addEventListener('selectbox_open', this.onOpen.bind(this), false);
          this.selectboxCloseEvent = new CustomEvent('selectbox_close');
          this.selectBox.addEventListener('selectbox_close', this.onClose.bind(this), false);
          document.addEventListener('click', function (e) {
            if (!e.target.closest("#selectbox_".concat(this.id))) {
              this.selectBox.classList.remove('selectbox_open');
            }
          }.bind(this));
          this.selectBoxListItems.forEach(function (item) {
            item.addEventListener('click', this.onSelect.bind(this));
          }.bind(this));
        }
      }, {
        key: "onClick",
        value: function onClick(e) {
          e.preventDefault();
          this.selectBox.dispatchEvent(this.selectboxOpenEvent);
        }
      }, {
        key: "onOpen",
        value: function onOpen() {
          this.selectBox.classList.add('selectbox_open');
          if (this.callbacks.open && typeof this.callbacks.open == 'function') {
            this.callbacks.open.call(this);
          }

          //this.setDirection();
        }
      }, {
        key: "setDirection",
        value: function setDirection() {
          var _max = window.getComputedStyle(this.selectBoxList).getPropertyValue('max-height');
          _max = parseInt(_max);
          var _min = window.innerHeight - (this.selectBox.offsetTop + this.selectBox.offsetHeight);
          if (!isNaN(_max) && _min < _max) {
            this.selectBox.classList.add('selectbox_direction_bottom');
          } else {
            this.selectBox.classList.remove('selectbox_direction_bottom');
          }
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.selectBox.classList.remove('selectbox_open');
          if (this.callbacks.close && typeof this.callbacks.close == 'function') {
            this.callbacks.close.call(this);
          }
        }
      }, {
        key: "onSelect",
        value: function onSelect(e) {
          e.preventDefault();
          if (parseInt(e.target.dataset.disabled)) {
            return;
          }
          this.selectBoxInputValue.innerHTML = e.target.innerHTML;
          this.selectBoxInputValue.dataset.value = e.target.dataset.value;
          this.selector.value = e.target.dataset.value;
          this.selector.dispatchEvent(new Event('change'));
          this.selectBoxListItems.forEach(function (el) {
            el.classList.remove('selected');
          });
          e.target.classList.add('selected');
          if (this.callbacks.select && typeof this.callbacks.select == 'function') {
            this.callbacks.select.call(this, {
              value: e.target.dataset.value,
              label: e.target.innerHTML
            });
          }
          this.selectBox.dispatchEvent(this.selectboxCloseEvent);
        }
      }]);
      return SelectBox;
    }();
    var boxes = document.querySelectorAll('[data-selectbox]');
    if (boxes) {
      boxes.forEach(function (el) {
        if (el.matches('select')) {
          var _sb = new SelectBox(el, {
            on: {
              open: function open() {
                console.log('open box');
              },
              close: function close() {
                console.log('close box');
              },
              select: function select(option) {
                console.log('select box', option.value);
              }
            }
          });
        }
      });
    }
  } catch (error) {
    console.log('error', error);
  }
});
//# sourceMappingURL=main.js.map
