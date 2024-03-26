/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import PrimeVue from "primevue/config";
// import Tailwind from "primevue/passthrough/tailwind";

import AutoComplete from "primevue/autocomplete";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import Badge from "primevue/badge";
import Button from "primevue/button";
import Breadcrumb from "primevue/breadcrumb";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import Carousel from "primevue/carousel";
import Checkbox from "primevue/checkbox";
import Chip from "primevue/chip";
import Chips from "primevue/chips";
import ColorPicker from "primevue/colorpicker";
import Column from "primevue/column";
import ConfirmDialog from "primevue/confirmdialog";
import ConfirmPopup from "primevue/confirmpopup";
import ContextMenu from "primevue/contextmenu";
import DataTable from "primevue/datatable";
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import Dialog from "primevue/dialog";
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";
import Fieldset from "primevue/fieldset";
import FileUpload from "primevue/fileupload";
import InlineMessage from "primevue/inlinemessage";
import Inplace from "primevue/inplace";
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import InputText from "primevue/inputtext";
import Knob from "primevue/knob";
import Galleria from "primevue/galleria";
import Listbox from "primevue/listbox";
import MegaMenu from "primevue/megamenu";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Message from "primevue/message";
import MultiSelect from "primevue/multiselect";
import OrderList from "primevue/orderlist";
import OverlayPanel from "primevue/overlaypanel";
import Paginator from "primevue/paginator";
import Panel from "primevue/panel";
import PanelMenu from "primevue/panelmenu";
import Password from "primevue/password";
import PickList from "primevue/picklist";
import ProgressBar from "primevue/progressbar";
import Rating from "primevue/rating";
import RadioButton from "primevue/radiobutton";
import SelectButton from "primevue/selectbutton";
import ScrollPanel from "primevue/scrollpanel";
import ScrollTop from "primevue/scrolltop";
import Slider from "primevue/slider";
import Sidebar from "primevue/sidebar";
import Skeleton from "primevue/skeleton";
import SplitButton from "primevue/splitbutton";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Steps from "primevue/steps";
import TabMenu from "primevue/tabmenu";
import Tag from "primevue/tag";
import TieredMenu from "primevue/tieredmenu";
import Textarea from "primevue/textarea";
import Timeline from "primevue/timeline";
import Toast from "primevue/toast";
import Toolbar from "primevue/toolbar";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import ToggleButton from "primevue/togglebutton";
import Tree from "primevue/tree";
import TreeTable from "primevue/treetable";
import TriStateCheckbox from "primevue/tristatecheckbox";

// directives
import BadgeDirective from "primevue/badgedirective";
import Ripple from "primevue/ripple";
import StyleClass from "primevue/styleclass";
import Tooltip from "primevue/tooltip";

// services
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

export const TRANSITIONS = {
  toggleable: {
    enterFromClass: "max-h-0",
    enterActiveClass: "overflow-hidden transition-all duration-500 ease-in-out",
    enterToClass: "max-h-40	",
    leaveFromClass: "max-h-40",
    leaveActiveClass: "overflow-hidden transition-all duration-500 ease-in",
    leaveToClass: "max-h-0",
  },
  overlay: {
    enterFromClass: "opacity-0 scale-75",
    enterActiveClass:
      "transition-transform transition-opacity duration-150 ease-in",
    leaveActiveClass: "transition-opacity duration-150 ease-linear",
    leaveToClass: "opacity-0",
  },
};

const DevhousePT = {
  global: {
    css: `
        * {
          transition: all 0.2s ease-in-out;
        }
        *[data-pd-ripple="true"]{
            overflow: hidden;
            position: relative;
        }
        span[data-p-ink-active="true"]{
            animation: ripple 0.4s linear;
        }
        @keyframes ripple {
            100% {
                opacity: 0;
                transform: scale(2.5);
            }
        }

        .progress-spinner-circle {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: 0;
            animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
            stroke-linecap: round;
        }

        @keyframes p-progress-spinner-dash{
            0% {
                stroke-dasharray: 1, 200;
                stroke-dashoffset: 0;
            }
            
            50% {
                stroke-dasharray: 89, 200;
                stroke-dashoffset: -35px;
            }
            100% {
                stroke-dasharray: 89, 200;
                stroke-dashoffset: -124px;
            }
        }
        @keyframes p-progress-spinner-color {
            100%, 0% {
                stroke: #ff5757;
            }
            40% {
                stroke: #696cff;
            }
            66% {
                stroke: #1ea97c;
            }
            80%, 90% {
                stroke: #cc8925;
            }
        }

        .progressbar-value-animate::after {
            will-change: left, right;
            animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        }
        .progressbar-value-animate::before {
            will-change: left, right;
            animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
        }
        @keyframes p-progressbar-indeterminate-anim {
            0% {
                left: -35%;
                right: 100%;
            }
            60% {
                left: 100%;
                right: -90%;
            }
            100% {
                left: 100%;
                right: -90%;
            }
        }
        .remove-arrow::-webkit-inner-spin-button, 
        .remove-arrow::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
        } 
  
        .remove-arrow { 
            -moz-appearance: textfield; 
        } 
    `,
  },
  directives: {
    ripple: {
      root: {
        class: ["block absolute bg-white/50 rounded-full pointer-events-none"],
        style: "transform: scale(0)",
      },
    },
    badge: {
      root: ({ context }) => ({
        class: [
          "absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 origin-top-right m-0",
          "text-xs leading-6 flex items-center justify-center",
          "text-center text-white font-bold",
          {
            "rounded-full p-0": context.nogutter || context.dot,
            "rounded-[10px] px-2": !context.nogutter && !context.dot,
            "min-w-[0.5rem] w-2 h-2": context.dot,
            "min-w-[1.5rem] h-6": !context.dot,
          },
          {
            "bg-primary-500 ":
              context.info ||
              (!context.info &&
                !context.success &&
                !context.warning &&
                !context.danger),
            "bg-primary-500 ": context.success,
            "bg-orange-500 ": context.warning,
            "bg-red-500 ": context.danger,
          },
        ],
      }),
    },
    tooltip: {
      root: ({ context }) => ({
        class: [
          "absolute shadow-md",
          {
            "py-0 px-1":
              context?.right ||
              context?.left ||
              (!context?.right &&
                !context?.left &&
                !context?.top &&
                !context?.bottom),
            "py-1 px-0": context?.top || context?.bottom,
          },
        ],
      }),
      arrow: ({ context }) => ({
        class: [
          "absolute w-0 h-0 border-transparent border-solid",
          {
            "-m-t-1 border-y-[0.25rem] border-r-[0.25rem] border-l-0 border-r-gray-500":
              context?.right ||
              (!context?.right &&
                !context?.left &&
                !context?.top &&
                !context?.bottom),
            "-m-t-1 border-y-[0.25rem] border-l-[0.25rem] border-r-0 border-l-gray-500":
              context?.left,
            "-m-l-1 border-x-[0.25rem] border-t-[0.25rem] border-b-0 border-t-gray-500":
              context?.top,
            "-m-l-1 border-x-[0.25rem] border-b-[0.25rem] border-t-0 border-b-gray-500":
              context?.bottom,
          },
        ],
      }),
      text: {
        class:
          "p-3 bg-gray-500 text-white rounded-md whitespace-pre-line break-words",
      },
    },
  },
  inputtext: {
    root: ({ props, context, parent }) => {
      var _a;
      return {
        class: [
          // Font
          "font-sans leading-none",
          // Flex
          { "flex-1 w-[1%]": parent.instance.$name == "InputGroup" },
          // Spacing
          "m-0",
          {
            "px-4 py-4": props.size == "large",
            "px-2 py-2": props.size == "small",
            "p-3": props.size == null,
          },
          // Shape
          { "rounded-2xl": parent.instance.$name !== "InputGroup" },
          {
            "first:rounded-l-md rounded-none last:rounded-r-md":
              parent.instance.$name == "InputGroup",
          },
          {
            "border-0 border-y border-l last:border-r":
              parent.instance.$name == "InputGroup",
          },
          {
            "first:ml-0 -ml-px":
              parent.instance.$name == "InputGroup" && !props.showButtons,
          },
          // Colors
          "text-surface-600 dark:text-surface-200",
          "placeholder:text-surface-400 dark:placeholder:text-surface-500",
          "bg-surface-0 dark:bg-surface-900",
          "border border-gray-200",
          { "border-surface-300 dark:border-surface-600": !props.invalid },
          // Invalid State
          { "border-red-500 dark:border-red-400": props.invalid },
          // States
          {
            "hover:border-primary-500 dark:hover:border-primary-400":
              !context.disabled && !props.invalid,
            "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10":
              !context.disabled,
            "opacity-60 select-none pointer-events-none cursor-default":
              context.disabled,
          },
          // Filled State *for FloatLabel
          {
            filled:
              ((_a = parent.instance) == null ? void 0 : _a.$name) ==
                "FloatLabel" && context.filled,
          },
          // Misc
          "appearance-none",
          "transition-colors duration-200",
        ],
      };
    },
  },
  button: {
    root: ({ props, context, parent }) => ({
      class: [
        "relative",
        // Alignments
        "items-center inline-flex text-center align-bottom justify-center",
        // Sizes & Spacing
        "leading-[normal]",
        {
          "px-4 py-3": props.size === null,
          "text-sm py-2 px-3": props.size === "small",
          "text-xl py-3 px-4": props.size === "large",
        },
        {
          "w-12 p-0 py-3": props.label == null && props.icon !== null,
        },
        // Shapes
        { "shadow-lg": props.raised },
        { "rounded-2xl": !props.rounded, "rounded-full": props.rounded },
        {
          "rounded-none first:rounded-l-md last:rounded-r-md":
            parent.instance.$name == "InputGroup",
        },
        // Link Button
        { "text-primary-600 bg-transparent border-transparent": props.link },
        // Plain Button
        {
          "text-white bg-gray-500 border border-gray-500":
            props.plain && !props.outlined && !props.text,
        },
        // Plain Text Button
        { "text-surface-500": props.plain && props.text },
        // Plain Outlined Button
        {
          "text-surface-500 border border-gray-500":
            props.plain && props.outlined,
        },
        // Text Button
        { "bg-transparent border-transparent": props.text && !props.plain },
        // Outlined Button
        { "bg-transparent border": props.outlined && !props.plain },
        // --- Severity Buttons ---
        // Primary Button
        {
          "text-white dark:text-surface-900":
            !props.link &&
            props.severity === null &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "bg-primary-500 dark:bg-primary-400":
            !props.link &&
            props.severity === null &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "border border-primary-500 dark:border-primary-400":
            !props.link &&
            props.severity === null &&
            !props.text &&
            !props.outlined &&
            !props.plain,
        },
        // Primary Text Button
        {
          "text-primary-500 dark:text-primary-400":
            props.text && props.severity === null && !props.plain,
        },
        // Primary Outlined Button
        {
          "text-primary-500 border border-primary-500 hover:bg-primary-300/20":
            props.outlined && props.severity === null && !props.plain,
        },
        // Secondary Button
        {
          "text-primary-500 dark:text-surface-900":
            props.severity === "secondary" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "bg-primary-500/15 dark:bg-surface-400":
            props.severity === "secondary" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
        },
        // Secondary Text Button
        {
          "text-surface-500 dark:text-surface-300":
            props.text && props.severity === "secondary" && !props.plain,
        },
        // Secondary Outlined Button
        {
          "text-surface-500 dark:text-surface-300":
            props.outlined && props.severity === "secondary" && !props.plain,
        },
        // Success Button
        {
          "text-white dark:text-green-900":
            props.severity === "success" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "bg-green-500 dark:bg-green-400":
            props.severity === "success" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "border border-green-500 dark:border-green-400":
            props.severity === "success" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
        },
        // Success Text Button
        {
          "text-green-500 dark:text-green-400":
            props.text && props.severity === "success" && !props.plain,
        },
        // Success Outlined Button
        {
          "text-green-500 border border-green-500 hover:bg-green-300/20":
            props.outlined && props.severity === "success" && !props.plain,
        },
        // Info Button
        {
          "text-white dark:text-surface-900":
            props.severity === "info" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "bg-blue-500 dark:bg-blue-400":
            props.severity === "info" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "border border-blue-500 dark:border-blue-400":
            props.severity === "info" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
        },
        // Info Text Button
        {
          "text-blue-500 dark:text-blue-400":
            props.text && props.severity === "info" && !props.plain,
        },
        // Info Outlined Button
        {
          "text-blue-500 border border-blue-500 hover:bg-blue-300/20 ":
            props.outlined && props.severity === "info" && !props.plain,
        },
        // Warning Button
        {
          "text-white dark:text-surface-900":
            props.severity === "warning" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "bg-orange-500 dark:bg-orange-400":
            props.severity === "warning" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "border border-orange-500 dark:border-orange-400":
            props.severity === "warning" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
        },
        // Warning Text Button
        {
          "text-orange-500 dark:text-orange-400":
            props.text && props.severity === "warning" && !props.plain,
        },
        // Warning Outlined Button
        {
          "text-orange-500 border border-orange-500 hover:bg-orange-300/20":
            props.outlined && props.severity === "warning" && !props.plain,
        },
        // Help Button
        {
          "text-white dark:text-surface-900":
            props.severity === "help" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "bg-purple-500 dark:bg-purple-400":
            props.severity === "help" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "border border-purple-500 dark:border-purple-400":
            props.severity === "help" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
        },
        // Help Text Button
        {
          "text-purple-500 dark:text-purple-400":
            props.text && props.severity === "help" && !props.plain,
        },
        // Help Outlined Button
        {
          "text-purple-500 border border-purple-500 hover:bg-purple-300/20":
            props.outlined && props.severity === "help" && !props.plain,
        },
        // Danger Button
        {
          "text-white dark:text-surface-900":
            props.severity === "danger" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "bg-red-500 dark:bg-red-400":
            props.severity === "danger" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
          "border border-red-500 dark:border-red-400":
            props.severity === "danger" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
        },
        // Danger Text Button
        {
          "text-red-500 dark:text-red-400":
            props.text && props.severity === "danger" && !props.plain,
        },
        // Danger Outlined Button
        {
          "text-red-500 border border-red-500 hover:bg-red-300/20":
            props.outlined && props.severity === "danger" && !props.plain,
        },
        // --- Severity Button States ---
        "focus:outline-none focus:outline-offset-0 focus:ring",
        // Link
        {
          "focus:ring-primary-400/50 dark:focus:ring-primary-300/50":
            props.link,
        },
        // Plain
        {
          "hover:bg-gray-600 hover:border-gray-600":
            props.plain && !props.outlined && !props.text,
        },
        // Text & Outlined Button
        {
          "hover:bg-surface-300/20":
            props.plain && (props.text || props.outlined),
        },
        // Primary
        {
          "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300":
            !props.link &&
            props.severity === null &&
            !props.text &&
            !props.outlined &&
            !props.plain,
        },
        {
          "focus:ring-primary-400/50 dark:focus:ring-primary-300/50":
            props.severity === null,
        },
        // Text & Outlined Button
        {
          "hover:bg-primary-300/20":
            (props.text || props.outlined) &&
            props.severity === null &&
            !props.plain,
        },
        // Secondary
        {
          "hover:bg-surface-600 dark:hover:bg-surface-300 hover:border-surface-600 dark:hover:border-surface-300":
            props.severity === "secondary" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
        },
        {
          "focus:ring-surface-400/50 dark:focus:ring-surface-300/50":
            props.severity === "secondary",
        },
        // Text & Outlined Button
        {
          "hover:bg-surface-300/20":
            (props.text || props.outlined) &&
            props.severity === "secondary" &&
            !props.plain,
        },
        // Success
        {
          "hover:bg-green-600 dark:hover:bg-green-300 hover:border-green-600 dark:hover:border-green-300":
            props.severity === "success" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
        },
        {
          "focus:ring-green-400/50 dark:focus:ring-green-300/50":
            props.severity === "success",
        },
        // Text & Outlined Button
        {
          "hover:bg-green-300/20":
            (props.text || props.outlined) &&
            props.severity === "success" &&
            !props.plain,
        },
        // Info
        {
          "hover:bg-blue-600 dark:hover:bg-blue-300 hover:border-blue-600 dark:hover:border-blue-300":
            props.severity === "info" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
        },
        {
          "focus:ring-blue-400/50 dark:focus:ring-blue-300/50":
            props.severity === "info",
        },
        // Text & Outlined Button
        {
          "hover:bg-blue-300/20":
            (props.text || props.outlined) &&
            props.severity === "info" &&
            !props.plain,
        },
        // Warning
        {
          "hover:bg-orange-600 dark:hover:bg-orange-300 hover:border-orange-600 dark:hover:border-orange-300":
            props.severity === "warning" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
        },
        {
          "focus:ring-orange-400/50 dark:focus:ring-orange-300/50":
            props.severity === "warning",
        },
        // Text & Outlined Button
        {
          "hover:bg-orange-300/20":
            (props.text || props.outlined) &&
            props.severity === "warning" &&
            !props.plain,
        },
        // Help
        {
          "hover:bg-purple-600 dark:hover:bg-purple-300 hover:border-purple-600 dark:hover:border-purple-300":
            props.severity === "help" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
        },
        {
          "focus:ring-purple-400/50 dark:focus:ring-purple-300/50":
            props.severity === "help",
        },
        // Text & Outlined Button
        {
          "hover:bg-purple-300/20":
            (props.text || props.outlined) &&
            props.severity === "help" &&
            !props.plain,
        },
        // Danger
        {
          "hover:bg-red-600 dark:hover:bg-red-300 hover:border-red-600 dark:hover:border-red-300":
            props.severity === "danger" &&
            !props.text &&
            !props.outlined &&
            !props.plain,
        },
        {
          "focus:ring-red-400/50 dark:focus:ring-red-300/50":
            props.severity === "danger",
        },
        // Text & Outlined Button
        {
          "hover:bg-red-300/20":
            (props.text || props.outlined) &&
            props.severity === "danger" &&
            !props.plain,
        },
        // Disabled
        { "opacity-60 pointer-events-none cursor-default": context.disabled },
        // Transitions
        "transition duration-200 ease-in-out",
        // Misc
        "cursor-pointer overflow-hidden select-none",
      ],
    }),
    label: ({ props }) => ({
      class: [
        "duration-200",
        "font-bold",
        {
          "hover:underline": props.link,
        },
        {
          "flex-1": props.label !== null,
          "invisible w-0": props.label == null,
        },
      ],
    }),
    icon: ({ props }) => ({
      class: [
        "mx-0",
        {
          "mr-2": props.iconPos == "left" && props.label != null,
          "ml-2 order-1": props.iconPos == "right" && props.label != null,
          "mb-2": props.iconPos == "top" && props.label != null,
          "mt-2": props.iconPos == "bottom" && props.label != null,
        },
      ],
    }),
    loadingicon: ({ props }) => ({
      class: [
        "h-4 w-4",
        "mx-0",
        {
          "mr-2": props.iconPos == "left" && props.label != null,
          "ml-2 order-1": props.iconPos == "right" && props.label != null,
          "mb-2": props.iconPos == "top" && props.label != null,
          "mt-2": props.iconPos == "bottom" && props.label != null,
        },
        "animate-spin",
      ],
    }),
    badge: ({ props }) => ({
      class: [
        {
          "ml-2 w-4 h-4 leading-none flex items-center justify-center":
            props.badge,
        },
      ],
    }),
  },
  inputnumber: {
    root: ({ props, parent }) => ({
      class: [
        // Flex
        "inline-flex",
        { "flex-col": props.showButtons && props.buttonLayout == "vertical" },
        { "flex-1 w-[1%]": parent.instance.$name == "InputGroup" },
        // Shape
        {
          "first:rounded-l-md rounded-none last:rounded-r-md":
            parent.instance.$name == "InputGroup" && !props.showButtons,
        },
        {
          "border-0 border-y border-l last:border-r border-surface-300 dark:border-surface-600":
            parent.instance.$name == "InputGroup" && !props.showButtons,
        },
        {
          "first:ml-0 -ml-px":
            parent.instance.$name == "InputGroup" && !props.showButtons,
        },
        //Sizing
        { "!w-16": props.showButtons && props.buttonLayout == "vertical" },
      ],
    }),
    input: {
      root: ({ parent, context }) => {
        var _a, _b, _c;
        return {
          class: [
            // Display
            "flex flex-auto",
            // Font
            "font-sans leading-none",
            //Text
            {
              "text-center":
                parent.props.showButtons &&
                parent.props.buttonLayout == "vertical",
            },
            // Spacing
            "p-3",
            "m-0",
            // Shape
            "rounded-2xl",
            { "rounded-tr-none rounded-br-none": parent.props.showButtons },
            {
              "rounded-tl-none rounded-bl-none":
                parent.props.showButtons &&
                parent.props.buttonLayout == "horizontal",
            },
            {
              "rounded-none":
                parent.props.showButtons &&
                parent.props.buttonLayout == "vertical",
            },
            {
              "!rounded-none":
                ((_a = parent.instance.$parentInstance) == null
                  ? void 0
                  : _a.$name) == "InputGroup" && !parent.props.showButtons,
            },
            {
              "border-0":
                ((_b = parent.instance.$parentInstance) == null
                  ? void 0
                  : _b.$name) == "InputGroup" && !parent.props.showButtons,
            },
            // Colors
            "text-surface-600 dark:text-surface-200",
            "placeholder:text-surface-400 dark:placeholder:text-surface-500",
            "bg-surface-0 dark:bg-surface-900",
            "border",
            {
              "border-surface-300 dark:border-surface-600":
                !parent.props.invalid,
            },
            // Invalid State
            { "border-red-500 dark:border-red-400": parent.props.invalid },
            // States
            {
              "hover:border-primary-500 dark:hover:border-primary-400":
                !parent.props.invalid,
            },
            "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10",
            {
              "opacity-60 select-none pointer-events-none cursor-default":
                context.disabled,
            },
            // Filled State *for FloatLabel
            {
              filled:
                ((_c = parent.instance) == null ? void 0 : _c.$name) ==
                  "FloatLabel" && context.filled,
            },
            //Position
            {
              "order-2":
                parent.props.buttonLayout == "horizontal" ||
                parent.props.buttonLayout == "vertical",
            },
          ],
        };
      },
    },
    buttongroup: ({ props }) => ({
      class: [
        // Flex
        "flex",
        "flex-col",
      ],
    }),
    incrementbutton: {
      root: ({ parent }) => ({
        class: [
          // Display
          "flex flex-auto",
          // Alignment
          "items-center",
          "justify-center",
          "text-center align-bottom",
          //Position
          "relative",
          {
            "order-3":
              parent.props.showButtons &&
              parent.props.buttonLayout == "horizontal",
          },
          {
            "order-1":
              parent.props.showButtons &&
              parent.props.buttonLayout == "vertical",
          },
          //Color
          "text-white dark:text-surface-900",
          "bg-primary-500 dark:bg-primary-400",
          "border border-primary-500 dark:border-primary-400",
          // Sizing
          "w-[3rem]",
          {
            "px-4 py-3":
              parent.props.showButtons &&
              parent.props.buttonLayout !== "stacked",
          },
          {
            "p-0":
              parent.props.showButtons &&
              parent.props.buttonLayout == "stacked",
          },
          {
            "w-full":
              parent.props.showButtons &&
              parent.props.buttonLayout == "vertical",
          },
          // Shape
          "rounded-md",
          {
            "rounded-tl-none rounded-br-none rounded-bl-none":
              parent.props.showButtons &&
              parent.props.buttonLayout == "stacked",
          },
          {
            "rounded-bl-none rounded-tl-none":
              parent.props.showButtons &&
              parent.props.buttonLayout == "horizontal",
          },
          {
            "rounded-bl-none rounded-br-none":
              parent.props.showButtons &&
              parent.props.buttonLayout == "vertical",
          },
          //States
          "focus:outline-none focus:outline-offset-0 focus:ring",
          "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
          //Misc
          "cursor-pointer overflow-hidden select-none",
        ],
      }),
      label: {
        class: "h-0 w-0",
      },
    },
    decrementbutton: {
      root: ({ parent }) => ({
        class: [
          // Display
          "flex flex-auto",
          // Alignment
          "items-center",
          "justify-center",
          "text-center align-bottom",
          //Position
          "relative",
          {
            "order-1":
              parent.props.showButtons &&
              parent.props.buttonLayout == "horizontal",
          },
          {
            "order-3":
              parent.props.showButtons &&
              parent.props.buttonLayout == "vertical",
          },
          //Color
          "text-white dark:text-surface-900",
          "bg-primary-500 dark:bg-primary-400",
          "border border-primary-500 dark:border-primary-400",
          // Sizing
          "w-[3rem]",
          {
            "px-4 py-3":
              parent.props.showButtons &&
              parent.props.buttonLayout !== "stacked",
          },
          {
            "p-0":
              parent.props.showButtons &&
              parent.props.buttonLayout == "stacked",
          },
          {
            "w-full":
              parent.props.showButtons &&
              parent.props.buttonLayout == "vertical",
          },
          // Shape
          "rounded-md",
          {
            "rounded-tr-none rounded-tl-none rounded-bl-none":
              parent.props.showButtons &&
              parent.props.buttonLayout == "stacked",
          },
          {
            "rounded-tr-none rounded-br-none ":
              parent.props.showButtons &&
              parent.props.buttonLayout == "horizontal",
          },
          {
            "rounded-tr-none rounded-tl-none ":
              parent.props.showButtons &&
              parent.props.buttonLayout == "vertical",
          },
          //States
          "focus:outline-none focus:outline-offset-0 focus:ring",
          "hover:bg-primary-600 dark:hover:bg-primary-300 hover:border-primary-600 dark:hover:border-primary-300",
          //Misc
          "cursor-pointer overflow-hidden select-none",
        ],
      }),
      label: {
        class: "h-0 w-0",
      },
    },
  },
  dropdown: {
    root: ({ props, state }) => ({
      class: [
        // Display and Position
        "mt-1",
        "inline-flex",
        "relative",
        // Shape
        "rounded-md",
        // Color and Background
        "bg-surface-0 dark:bg-surface-900",
        "border",
        { "border-surface-300 dark:border-surface-600": !props.invalid },
        // Invalid State
        { "border-red-500 dark:border-red-400": props.invalid },
        // Transitions
        "transition-all",
        "duration-200",
        // States
        {
          "hover:border-primary-500 dark:hover:border-primary-300":
            !props.invalid,
        },
        {
          "outline-none outline-offset-0 ring ring-primary-400/50 dark:ring-primary-300/50":
            state.focused,
        },
        // Misc
        "cursor-pointer",
        "select-none",
        {
          "opacity-60": props.disabled,
          "pointer-events-none": props.disabled,
          "cursor-default": props.disabled,
        },
      ],
    }),
    input: ({ props }) => ({
      class: [
        //Font
        "font-sans",
        "leading-none",
        // Display
        "block",
        "flex-auto",
        // Color and Background
        "bg-transparent",
        "border-0",
        {
          "text-surface-800 dark:text-white/80": props.modelValue != null,
          "text-surface-400 dark:text-surface-500": props.modelValue == null,
        },
        "placeholder:text-surface-400 dark:placeholder:text-surface-500",
        // Sizing and Spacing
        "w-[1%]",
        "p-3",
        { "pr-7": props.showClear },
        //Shape
        "rounded-none",
        // Transitions
        "transition",
        "duration-200",
        // States
        "focus:outline-none focus:shadow-none",
        // Misc
        "relative",
        "cursor-pointer",
        "overflow-hidden overflow-ellipsis",
        "whitespace-nowrap",
        "appearance-none",
      ],
    }),
    trigger: {
      class: [
        "flex items-center justify-center",
        "shrink-0",
        "bg-white",
        "text-surface-500",
        "w-12",
        "rounded-tr-md",
        "rounded-br-md",
      ],
    },
    panel: {
      class: [
        "absolute top-0 left-0",
        "border-0 dark:border",
        "rounded-md",
        "shadow-md",
        "bg-white dark:bg-surface-800",
        "text-surface-800 dark:text-white/80",
        "dark:border-surface-700",
      ],
    },
    wrapper: {
      class: ["max-h-[200px]", "overflow-auto"],
    },
    list: {
      class: "py-3 list-none m-0",
    },
    item: ({ context }) => ({
      class: [
        // Font
        "font-normal",
        "leading-none",
        // Position
        "relative",
        // Shape
        "border-0",
        "rounded-none",
        // Spacing
        "m-0",
        "py-3 px-5",
        // Color
        {
          "text-surface-700 dark:text-white/80":
            !context.focused && !context.selected && !context.disabled,
        },
        {
          "text-surface-600 dark:text-white/70":
            !context.focused && !context.selected && context.disabled,
        },
        {
          "bg-surface-200 dark:bg-surface-600/60 text-surface-700 dark:text-white/80":
            context.focused && !context.selected,
        },
        {
          "bg-primary-100 dark:bg-primary-400/40 dark:text-white/80":
            context.focused && context.selected,
        },
        {
          "bg-primary-50 dark:bg-primary-400/40 dark:text-white/80":
            !context.focused && context.selected,
        },
        //States
        {
          "hover:bg-surface-100 dark:hover:bg-surface-600/80":
            !context.focused && !context.selected,
        },
        {
          " hover:bg-green-50 dark:hover:text-white dark:hover:bg-surface-600/80":
            context.focused && !context.selected,
        },
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",
        // Transitions
        "transition-shadow",
        "duration-200",
        // Misc
        { "pointer-events-none cursor-default": context.disabled },
        { "cursor-pointer": !context.disabled },
        "overflow-hidden",
        "whitespace-nowrap",
      ],
    }),
    itemgroup: {
      class: [
        "font-bold",
        "m-0",
        "py-3 px-5",
        "text-surface-800 dark:text-white/80",
        "bg-surface-0 dark:bg-surface-600/80",
        "cursor-auto",
      ],
    },
    emptymessage: {
      class: [
        "leading-none",
        "py-3 px-5",
        "text-surface-800 dark:text-white/80",
        "bg-transparent",
      ],
    },
    header: {
      class: [
        "py-3 px-5",
        "m-0",
        "border-b",
        "rounded-tl-md",
        "rounded-tr-md",
        "text-surface-700 dark:text-white/80",
        "bg-surface-100 dark:bg-surface-800",
        "border-surface-300 dark:border-surface-700",
      ],
    },
    filtercontainer: {
      class: "relative",
    },
    filterinput: {
      class: [
        "font-sans",
        "leading-none",
        "pr-7 py-3 px-3",
        "-mr-7",
        "w-full",
        "text-surface-700 dark:text-white/80",
        "bg-surface-0 dark:bg-surface-900",
        "border-surface-200 dark:border-surface-700",
        "border",
        "rounded-lg",
        "appearance-none",
        "transition",
        "duration-200",
        "hover:border-primary-500 dark:hover:border-primary-300",
        "focus:ring focus:outline-none focus:outline-offset-0",
        "focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
        "appearance-none",
      ],
    },
    filtericon: {
      class: ["absolute", "top-1/2 right-3", "-mt-2"],
    },
    clearicon: {
      class: ["text-surface-500", "absolute", "top-1/2", "right-12", "-mt-2"],
    },
    transition: {
      enterFromClass: "opacity-0 scale-y-[0.8]",
      enterActiveClass:
        "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
      leaveActiveClass: "transition-opacity duration-100 ease-linear",
      leaveToClass: "opacity-0",
    },
  },
  dialog: {
    root: ({ state }) => ({
      class: [
        // Shape
        "rounded-2xl",
        "shadow-lg",
        "border-0",
        // Size
        "max-h-[90vh]",
        "w-[50vw]",
        "m-0",
        // Color
        "dark:border",
        "dark:border-surface-700",
        // Transitions
        "transform",
        "scale-100",
        // Maximized State
        {
          "transition-none": state.maximized,
          "transform-none": state.maximized,
          "!w-screen": state.maximized,
          "!h-screen": state.maximized,
          "!max-h-full": state.maximized,
          "!top-0": state.maximized,
          "!left-0": state.maximized,
        },
      ],
    }),
    header: {
      class: [
        "flex items-center justify-between",
        "shrink-0",
        "p-6",
        "border-t-0",
        "rounded-tl-2xl",
        "rounded-tr-2xl",
        "bg-white dark:bg-surface-800",
        "text-surface-700 dark:text-surface-0/80",
      ],
    },
    title: {
      class: ["font-bold text-lg"],
    },
    icons: {
      class: ["flex items-center"],
    },
    closeButton: {
      class: [
        "relative",
        "flex items-center justify-center",
        "mr-2",
        "last:mr-0",
        "w-8 h-8",
        "border-0",
        "rounded-full",
        "text-surface-500",
        "bg-transparent",
        "transition duration-200 ease-in-out",
        "hover:text-surface-700 dark:hover:text-white/80",
        "hover:bg-surface-100 dark:hover:bg-surface-800/80",
        "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset",
        "focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
        "overflow-hidden",
      ],
    },
    maximizablebutton: {
      class: [
        "relative",
        "flex items-center justify-center",
        "mr-2",
        "last:mr-0",
        "w-8 h-8",
        "border-0",
        "rounded-full",
        "text-surface-500",
        "bg-transparent",
        "transition duration-200 ease-in-out",
        "hover:text-surface-700 dark:hover:text-white/80",
        "hover:bg-surface-100 dark:hover:bg-surface-800/80",
        "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset",
        "focus:ring-primary-400/50 dark:focus:ring-primary-300/50",
        "overflow-hidden",
      ],
    },
    closeButtonIcon: {
      class: ["inline-block", "w-4", "h-4"],
    },
    maximizableicon: {
      class: ["inline-block", "w-4", "h-4"],
    },
    content: ({ state, instance }) => ({
      class: [
        // Spacing
        "px-6",
        "pb-8",
        "pt-0",
        // Shape
        {
          grow: state.maximized,
          "rounded-bl-2xl": !instance.$slots.footer,
          "rounded-br-2xl": !instance.$slots.footer,
        },
        // Colors
        "bg-white dark:bg-surface-800",
        "text-surface-700 dark:text-surface-0/80",
        // Misc
        "overflow-y-auto",
      ],
    }),
    footer: {
      class: [
        "flex items-center justify-end",
        "shrink-0",
        "text-right",
        "gap-2",
        "px-6",
        "pb-6",
        "border-t-0",
        "rounded-b-lg",
        "bg-white dark:bg-surface-800",
        "text-surface-700 dark:text-surface-0/80",
      ],
    },
    mask: ({ props }) => ({
      class: [
        // Transitions
        "transition-all",
        "duration-300",
        { "p-5": !props.position == "full" },
        // Background and Effects
        {
          "has-[.mask-active]:bg-transparent bg-black/40": props.modal,
          // "has-[.mask-active]:backdrop-blur-none backdrop-blur-sm": props.modal,
        },
      ],
    }),
    transition: ({ props }) =>
      props.position === "top"
        ? {
            enterFromClass:
              "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active",
            enterActiveClass: "transition-all duration-200 ease-out",
            leaveActiveClass: "transition-all duration-200 ease-out",
            leaveToClass:
              "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active",
          }
        : props.position === "bottom"
          ? {
              enterFromClass: "opacity-0 scale-75 translate-y-full mask-active",
              enterActiveClass: "transition-all duration-200 ease-out",
              leaveActiveClass: "transition-all duration-200 ease-out",
              leaveToClass:
                "opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0 mask-active",
            }
          : props.position === "left" ||
              props.position === "topleft" ||
              props.position === "bottomleft"
            ? {
                enterFromClass:
                  "opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0 mask-active",
                enterActiveClass: "transition-all duration-200 ease-out",
                leaveActiveClass: "transition-all duration-200 ease-out",
                leaveToClass:
                  "opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0 mask-active",
              }
            : props.position === "right" ||
                props.position === "topright" ||
                props.position === "bottomright"
              ? {
                  enterFromClass:
                    "opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active",
                  enterActiveClass: "transition-all duration-200 ease-out",
                  leaveActiveClass: "transition-all duration-200 ease-out",
                  leaveToClass:
                    "opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active",
                }
              : {
                  enterFromClass: "opacity-0 scale-75 mask-active",
                  enterActiveClass: "transition-all duration-200 ease-out",
                  leaveActiveClass: "transition-all duration-200 ease-out",
                  leaveToClass: "opacity-0 scale-75 mask-active",
                },
  },
  textarea: {
    root: ({ context, props }) => ({
      class: [
        // Font
        "font-sans leading-none",
        // Spacing
        "m-0",
        "p-3",
        // Shape
        "rounded-md",
        // Colors
        "text-surface-600 dark:text-surface-200",
        "placeholder:text-surface-400 dark:placeholder:text-surface-500",
        "bg-surface-0 dark:bg-surface-900",
        "border",
        { "border-surface-300 dark:border-surface-600": !props.invalid },
        // Invalid State
        { "border-red-500 dark:border-red-400": props.invalid },
        // States
        {
          "hover:border-primary-500 dark:hover:border-primary-400":
            !context.disabled && !props.invalid,
          "focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50":
            !context.disabled,
          "opacity-60 select-none pointer-events-none cursor-default":
            context.disabled,
        },
        // Misc
        "appearance-none",
        "transition-colors duration-200",
      ],
    }),
  },
  toast: {
    root: ({ props }) => ({
      class: [
        //Size and Shape
        "w-96 rounded-md",
        // Positioning
        {
          "-translate-x-2/4":
            props.position == "top-center" || props.position == "bottom-center",
        },
      ],
    }),
    container: ({ props }) => ({
      class: [
        "my-4 rounded-md w-full",
        "border-solid border-0 border-l-[6px]",
        "backdrop-blur-[10px] shadow-md",
        // Colors
        {
          "bg-blue-100/70 dark:bg-blue-500/20":
            props.message.severity == "info",
          "bg-green-100/70 dark:bg-green-500/20":
            props.message.severity == "success",
          "bg-orange-100/70 dark:bg-orange-500/20":
            props.message.severity == "warn",
          "bg-red-100/70 dark:bg-red-500/20": props.message.severity == "error",
        },
        {
          "border-blue-500 dark:border-blue-400":
            props.message.severity == "info",
          "border-green-500 dark:border-green-400":
            props.message.severity == "success",
          "border-orange-500 dark:border-orange-400":
            props.message.severity == "warn",
          "border-red-500 dark:border-red-400":
            props.message.severity == "error",
        },
        {
          "text-blue-700 dark:text-blue-300": props.message.severity == "info",
          "text-green-700 dark:text-green-300":
            props.message.severity == "success",
          "text-orange-700 dark:text-orange-300":
            props.message.severity == "warn",
          "text-red-700 dark:text-red-300": props.message.severity == "error",
        },
      ],
    }),
    content: {
      class: "flex items-start p-4",
    },
    icon: {
      class: ["w-6 h-6", "text-lg leading-none mr-2 shrink-0"],
    },
    text: {
      class: ["text-base leading-none", "ml-2", "flex-1"],
    },
    summary: {
      class: "font-bold block",
    },
    detail: {
      class: "mt-2 block",
    },
    closebutton: {
      class: [
        "flex items-center justify-center",
        "w-8 h-8",
        "ml-auto  relative",
        "rounded-full",
        "bg-transparent",
        "transition duration-200 ease-in-out",
        "hover:bg-surface-0/50 dark:hover:bg-surface-0/10",
        "overflow-hidden",
      ],
    },
    transition: {
      enterFromClass: "opacity-0 translate-y-2/4",
      enterActiveClass: "transition-[transform,opacity] duration-300",
      leaveFromClass: "max-h-[1000px]",
      leaveActiveClass:
        "!transition-[max-height_.45s_cubic-bezier(0,1,0,1),opacity_.3s,margin-bottom_.3s] overflow-hidden",
      leaveToClass: "max-h-0 opacity-0 mb-0",
    },
  },
  password: {
    root: ({ props }) => ({
      class: [
        "inline-flex relative text-black w-full",
        {
          "opacity-60 select-none pointer-events-none cursor-default":
            props.disabled,
        },
      ],
    }),
    panel: "p-5 bg-white text-gray-700 shadow-md rounded-md",
    meter: "mb-2 bg-gray-300 h-3",
    meterlabel: ({ instance, props }) => ({
      class: [
        "transition-width duration-1000 ease-in-out h-full",
        {
          "bg-red-500": instance?.meter?.strength == "weak",
          "bg-orange-500": instance?.meter?.strength == "medium",
          "bg-primary-500": instance?.meter?.strength == "strong",
        },
        { "pr-[2.5rem] ": props.toggleMask },
      ],
    }),
    showicon: {
      class: ["absolute top-1/2 -mt-2", "right-3 text-gray-600"],
    },
    hideicon: {
      class: ["absolute top-1/2 -mt-2", "right-3 text-gray-600"],
    },
    transition: TRANSITIONS.overlay,
  },
  accordion: {
    accordiontab: {
      root: {
        class: "mb-1",
      },
      header: ({ props }) => ({
        class: [
          // State
          {
            "select-none pointer-events-none cursor-default opacity-60":
              props == null ? void 0 : props.disabled,
          },
        ],
      }),
      headerAction: ({ context }) => ({
        class: [
          //Font
          "font-bold",
          "leading-none",
          // Alignments
          "flex items-center flex-row-reverse justify-between",
          "relative",
          // Sizing
          "p-5",
          // Shape
          "rounded-t-xl",
          {
            "rounded-br-xl rounded-bl-xl": !context.active,
            "rounded-br-0 rounded-bl-0": context.active,
          },
          // Color
          "border border-surface-200 dark:border-surface-700",
          "bg-white dark:bg-surface-800",
          "text-surface-600 dark:text-surface-0/80",
          { "text-surface-900": context.active },
          // Transition
          "transition duration-200 ease-in-out",
          "transition-shadow duration-200",
          // States
          "hover:bg-surface-100 dark:hover:bg-surface-700/40",
          "hover:text-surface-900",
          "focus:outline-none focus:outline-offset-0 focus-visible:ring focus-visible:ring-primary-400/50 ring-inset dark:focus-visible:ring-primary-300/50",
          // Focus
          // Misc
          "cursor-pointer no-underline select-none",
        ],
      }),
      headerIcon: {
        class: "inline-block mr-2",
      },
      headerTitle: {
        class: "leading-none",
      },
      content: {
        class: [
          "p-5",
          "rounded-tl-none rounded-tr-none rounded-br-xl rounded-bl-xl",
          "border-t-0",
          "bg-white dark:bg-surface-800",
          "border border-surface-200 dark:border-surface-700",
          "text-surface-700 dark:text-surface-0/80",
        ],
      },
      transition: {
        enterFromClass: "max-h-0",
        enterActiveClass:
          "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
        enterToClass: "max-h-[1000px]",
        leaveFromClass: "max-h-[1000px]",
        leaveActiveClass:
          "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
        leaveToClass: "max-h-0",
      },
    },
  },
  sidebar: {
    root: ({ props }) => ({
      class: [
        "flex flex-col",
        "relative",
        {
          "!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0":
            props.position == "full",
        },
        {
          "h-full w-80": props.position == "left" || props.position == "right",
          "h-auto w-full":
            props.position == "top" || props.position == "bottom",
        },
        {
          "rounded-t-2xl": props.position == "bottom",
        },
        "border-0",
        "shadow-lg",
        "bg-white",
        "transition-transform",
        "duration-300",
        "pointer-events-auto",
      ],
    }),
    header: {
      class: ["flex items-center relative", "p-5"],
    },
    title: {
      class: ["font-bold text-lg text-center w-full"],
    },
    icons: {
      class: ["flex items-center"],
    },
    closeButton: {
      class: [
        "!absolute right-5 top-1/2 -translate-y-1/2",
        "flex items-center justify-center",
        "mr-2",
        "last:mr-0",
        "w-8 h-8",
        "border-0",
        "bg-transparent",
        "transition duration-200 ease-in-out",
        "overflow-hidden",
      ],
    },
    closeButtonIcon: {
      class: ["inline-block", "w-4", "h-4"],
    },
    content: {
      class: [
        "py-5 px-6",
        "pt-0",
        "h-full",
        "w-full max-w-[448px] mx-auto",
        "grow",
        "overflow-y-auto",
      ],
    },
    mask: ({ props }) => ({
      class: [
        "transition",
        "duration-200",
        { "p-5": !props.position == "full" },
        { "bg-black/40": props.modal },
      ],
    }),
    transition: ({ props }) => {
      return props.position === "top"
        ? {
            enterFromClass: "translate-x-0 -translate-y-full translate-z-0",
            leaveToClass: "translate-x-0 -translate-y-full translate-z-0",
          }
        : props.position === "bottom"
          ? {
              enterFromClass: "translate-x-0 translate-y-full translate-z-0",
              leaveToClass: "translate-x-0 translate-y-full translate-z-0",
            }
          : props.position === "left"
            ? {
                enterFromClass: "-translate-x-full translate-y-0 translate-z-0",
                leaveToClass: "-translate-x-full translate-y-0 translate-z-0",
              }
            : props.position === "right"
              ? {
                  enterFromClass:
                    "translate-x-full translate-y-0 translate-z-0",
                  leaveToClass: "translate-x-full translate-y-0 translate-z-0",
                }
              : {
                  enterFromClass: "opacity-0",
                  enterActiveClass: "transition-opacity duration-400 ease-in",
                  leaveActiveClass: "transition-opacity duration-400 ease-in",
                  leaveToClass: "opacity-0",
                };
    },
  },
  breadcrumb: {
    root: {
      class: [
        "rounded-md",
        "p-4",
        "bg-surface-0 dark:bg-surface-700",
        "border border-surface-200 dark:border-surface-700",
        "overflow-x-auto",
      ],
    },
    menu: {
      class: [
        "flex items-center flex-nowrap",
        "m-0 p-0 list-none leading-none",
      ],
    },
    action: {
      class: [
        "flex items-center",
        "rounded-md",
        "text-surface-600 dark:text-white/70",
        "focus-visible:outline-none focus-visible:outline-offset-0",
        "focus-visible:ring focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",
        "transition-shadow duration-200",
        "text-decoration-none",
      ],
    },
    icon: {
      class: "text-surface-600 dark:text-white/70",
    },
    separator: {
      class: [
        "flex items-center",
        " mx-2",
        "text-surface-600 dark:text-white/70",
      ],
    },
    label: {
      class: ["whitespace-nowrap hover:underline"],
    },
  },
  tabview: {
    navContainer: ({ props }) => ({
      class: [
        // Position
        "relative",
        // Misc
        { "overflow-hidden": props.scrollable },
      ],
    }),
    navContent: {
      class: [
        "overflow-y-hidden overscroll-contain",
        "overscroll-auto",
        "scroll-smooth",
        "[&::-webkit-scrollbar]:hidden",
      ],
    },
    previousButton: {
      class: [
        "flex items-center justify-center",
        "!absolute",
        "top-0 left-0",
        "z-20",
        "h-full w-12",
        "rounded-none",
        "bg-surface-0 dark:bg-surface-800",
        "text-primary-500 dark:text-primary-400",
        "shadow-md",
      ],
    },
    nextButton: {
      class: [
        "flex items-center justify-center",
        "!absolute",
        "top-0 right-0",
        "z-20",
        "h-full w-12",
        "rounded-none",
        "bg-surface-0 dark:bg-surface-800",
        "text-primary-500 dark:text-primary-400",
        "shadow-md",
      ],
    },
    nav: {
      class: [
        "flex flex-1",
        "list-none",
        "p-0 m-0",
        "bg-surface-0 dark:bg-surface-800",
        "border-b-2 border-surface-200 dark:border-surface-700",
        "text-surface-900 dark:text-surface-0/80",
      ],
    },
    tabpanel: {
      header: ({ props }) => ({
        class: [
          // Spacing
          "mr-0",
          // Misc
          {
            "opacity-60 cursor-default user-select-none select-none pointer-events-none":
              props == null ? void 0 : props.disabled,
          },
        ],
      }),
      headerAction: ({ parent, context }) => ({
        class: [
          "relative",
          // Font
          "font-bold",
          // Flexbox and Alignment
          "flex items-center",
          // Spacing
          "p-5",
          "-mb-[2px]",
          // Shape
          "border-b-2",
          "rounded-t-md",
          // Colors and Conditions
          {
            "border-surface-200 dark:border-surface-700":
              parent.state.d_activeIndex !== context.index,
            "bg-surface-0 dark:bg-surface-800":
              parent.state.d_activeIndex !== context.index,
            "text-surface-700 dark:text-surface-0/80":
              parent.state.d_activeIndex !== context.index,
            "bg-surface-0 dark:bg-surface-800":
              parent.state.d_activeIndex === context.index,
            "border-primary-500 dark:border-primary-400":
              parent.state.d_activeIndex === context.index,
            "text-primary-500 dark:text-primary-400":
              parent.state.d_activeIndex === context.index,
          },
          // States
          "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset",
          "focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",
          {
            "hover:bg-surface-0 dark:hover:bg-surface-800/80":
              parent.state.d_activeIndex !== context.index,
            "hover:border-surface-400 dark:hover:border-primary-400":
              parent.state.d_activeIndex !== context.index,
            "hover:text-surface-900 dark:hover:text-surface-0":
              parent.state.d_activeIndex !== context.index,
          },
          // Transitions
          "transition-all duration-200",
          // Misc
          "cursor-pointer select-none text-decoration-none",
          "overflow-hidden",
          "user-select-none",
        ],
      }),
      headerTitle: {
        class: ["leading-none", "whitespace-nowrap"],
      },
      content: {
        class: [
          "p-5",
          "rounded-b-md",
          "bg-surface-0 dark:bg-surface-800",
          "text-surface-700 dark:text-surface-0/80",
          "border-0",
        ],
      },
    },
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    ripple: true,
    unstyled: true,
    pt: DevhousePT,
  });
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.use(ConfirmationService);
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Toast", Toast);
  nuxtApp.vueApp.component("DataTable", DataTable);
  nuxtApp.vueApp.component("Column", Column);
  nuxtApp.vueApp.component("InputNumber", InputNumber);
  nuxtApp.vueApp.component("InputSwitch", InputSwitch);
  nuxtApp.vueApp.component("InputMask", InputMask);
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  nuxtApp.vueApp.component("MultiSelect", MultiSelect);
  nuxtApp.vueApp.component("Calendar", Calendar);
  nuxtApp.vueApp.component("Dialog", Dialog);
  nuxtApp.vueApp.component("Checkbox", Checkbox);
  nuxtApp.vueApp.component("Password", Password);
  nuxtApp.vueApp.component("RadioButton", RadioButton);
  nuxtApp.vueApp.component("SplitButton", SplitButton);
  nuxtApp.vueApp.component("Slider", Slider);
  nuxtApp.vueApp.component("Rating", Rating);
  nuxtApp.vueApp.component("ColorPicker", ColorPicker);
  nuxtApp.vueApp.component("Knob", Knob);
  nuxtApp.vueApp.component("ToggleButton", ToggleButton);
  nuxtApp.vueApp.component("Splitter", Splitter);
  nuxtApp.vueApp.component("Accordion", Accordion);
  nuxtApp.vueApp.component("AccordionTab", AccordionTab);
  nuxtApp.vueApp.component("AutoComplete", AutoComplete);
  nuxtApp.vueApp.component("Avatar", Avatar);
  nuxtApp.vueApp.component("AvatarGroup", AvatarGroup);
  nuxtApp.vueApp.component("Badge", Badge);
  nuxtApp.vueApp.component("Breadcrumb", Breadcrumb);
  nuxtApp.vueApp.component("Card", Card);
  nuxtApp.vueApp.component("Carousel", Carousel);
  nuxtApp.vueApp.component("Chip", Chip);
  nuxtApp.vueApp.component("Chips", Chips);
  nuxtApp.vueApp.component("ConfirmDialog", ConfirmDialog);
  nuxtApp.vueApp.component("ConfirmPopup", ConfirmPopup);
  nuxtApp.vueApp.component("ContextMenu", ContextMenu);
  nuxtApp.vueApp.component("DataView", DataView);
  nuxtApp.vueApp.component("DataViewLayoutOptions", DataViewLayoutOptions);
  nuxtApp.vueApp.component("Divider", Divider);
  nuxtApp.vueApp.component("Fieldset", Fieldset);
  nuxtApp.vueApp.component("FileUpload", FileUpload);
  nuxtApp.vueApp.component("InlineMessage", InlineMessage);
  nuxtApp.vueApp.component("Inplace", Inplace);
  nuxtApp.vueApp.component("Galleria", Galleria);
  nuxtApp.vueApp.component("Listbox", Listbox);
  nuxtApp.vueApp.component("MegaMenu", MegaMenu);
  nuxtApp.vueApp.component("Menu", Menu);
  nuxtApp.vueApp.component("Menubar", Menubar);
  nuxtApp.vueApp.component("Message", Message);
  nuxtApp.vueApp.component("OrderList", OrderList);
  nuxtApp.vueApp.component("OverlayPanel", OverlayPanel);
  nuxtApp.vueApp.component("Paginator", Paginator);
  nuxtApp.vueApp.component("Panel", Panel);
  nuxtApp.vueApp.component("PanelMenu", PanelMenu);
  nuxtApp.vueApp.component("PickList", PickList);
  nuxtApp.vueApp.component("ProgressBar", ProgressBar);
  nuxtApp.vueApp.component("SelectButton", SelectButton);
  nuxtApp.vueApp.component("ScrollPanel", ScrollPanel);
  nuxtApp.vueApp.component("ScrollTop", ScrollTop);
  nuxtApp.vueApp.component("Sidebar", Sidebar);
  nuxtApp.vueApp.component("Skeleton", Skeleton);
  nuxtApp.vueApp.component("SplitterPanel", SplitterPanel);
  nuxtApp.vueApp.component("Steps", Steps);
  nuxtApp.vueApp.component("TabMenu", TabMenu);
  nuxtApp.vueApp.component("Tag", Tag);
  nuxtApp.vueApp.component("TieredMenu", TieredMenu);
  nuxtApp.vueApp.component("Textarea", Textarea);
  nuxtApp.vueApp.component("Timeline", Timeline);
  nuxtApp.vueApp.component("Toolbar", Toolbar);
  nuxtApp.vueApp.component("TabView", TabView);
  nuxtApp.vueApp.component("TabPanel", TabPanel);
  nuxtApp.vueApp.component("Tree", Tree);
  nuxtApp.vueApp.component("TreeTable", TreeTable);
  nuxtApp.vueApp.component("TriStateCheckbox", TriStateCheckbox);
  nuxtApp.vueApp.directive("BadgeDirective", BadgeDirective);
  nuxtApp.vueApp.directive("Ripple", Ripple);
  nuxtApp.vueApp.directive("StyleClass", StyleClass);
  nuxtApp.vueApp.directive("Tooltip", Tooltip);
  //other components that you need
});
