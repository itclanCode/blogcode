---
title: 创建型设计模式
autoGroup-1: 设计模式
---

## 创建型设计模式

## 快速导航

<TOC />

## 前言

创建型设计模式描述了用于创建对象的"类"或方法,而不需要你自己直接创建对象,在决定用什么对象和什么对象类型才是自己要面对的特定情况和需求最为相关的,此抽象层给了代码更高的灵活性

以下介绍 5 种创建型设计模式

## 创建型设计模式

### 工场模式

利用工厂模式可以实现不指定特定的类而创建出来的对象

在以前,当涉及"类"时,我们需要使用`javaScript`关键字`new`来创建某特定类或子类的实例,而利用工场模式,对象的创建处理过程被予以抽象

使得相对复杂的对象创建处理过程得以封装于简单的接口之下,而不需要使用`new`关键字

这个抽象意味着,用作创建各个实例的后台类的类型和方法可以随时被完全替换,而不需要改变接口来适应类的创建

从其他开发者角度来说,并需要理会接口底下所发生的变化,如果预知到在将来可能需要作出许多更改,但又不希望必须重写散布在大量其他代码中的类的实例化代码,则使用工场模式是很理想的做法

根据工厂方法的不同输入参数,实现了基于若干个不同的"类"进行对象的实例化

```js
// 定义一个工厂,它会基于所输入的内容,使用最合适的类来为我们创建出相应的表单域对象
var FormFieldFactory = {
  // makeField方法使用以下2个选项
  // type定义所创建的表单域对象的类型,例如:text,email,或button
  // displayText,基于对象的类型,定义表单域的placeholder(占位符)文本或按钮上所显示的文本
  makeField: function(options) {
    var options = options || {},
      type = options.type || 'text',
      displayText = options.displayText || '',
      field;

    // 基于所提供的类型使用最合适的类来创建对象实例
    switch (type) {
      case 'text':
        field = new TextField(displayText);
        break;
      case 'email':
        field = new EmailField(displayText);
        break;
      case 'button':
        field = new ButtonField(displayText);
        break;
      // 如果不确定,则使用TextField,"类"
      default:
        field = new TextField(displayText);
        break;
    }
    return field;
  },
};

// 定义TextField类用于创建input表单元素
function TextField(displayText) {
  this.displayText = displayText;
}

// getElement方法将利用所提供的placeholder文本值来创建一个DOM元素
TextField.prototype.getELement = function() {
  var textField = document.createElement('input');
  textField.setAttribute('type', 'text');
  textField.setAttribute('placeholder', this.displayText);

  return textField;
};

// 定义EmailField类用于创建input emial表单元素
function EmailField(displayText) {
  this.displayText = displayText;
}

// getElement方法将利用所提供的placeholder文本值来创建一个DOM元素
EmailField.prototype.getElement = function() {
  var emailField = document.createElement('input');
  emailField.setAttribute('type', 'email');
  emailField.setAttribute('placeholder', this.displayText);
  return emailField;
};

// 定义ButtonField类,用于创建button表单元素
function ButtonField(displayText) {
  this.displayText = displayText;
}

// getElement方法将利用所提供的在按钮上显示的文本值来创建一个DOM元素
ButtonField.prototype.getElement = function() {
  var button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.innerHTML = this.displayText;

  return button;
};
```

## 使用工厂模式

使用工厂来创建一个文本输入表单域，一个 email 表单作用域和一个提交按钮

::: tip 注意
留意,在不需要知道底层那些类或他们的特定输入的情况下创建表单域的,FormFieldFactory 对该方式进行了抽象
:::

```js
var textField = FormFieldFactory.makdeField({
    type: 'text',
    displayText: '请输入地止',
  }),
  emailField = FormFieldFactory.makeField({
    type: 'email',
    displayText: '请输入邮件地止',
  }),
  buttonField = FormFieldFactory.makeField({
    type: 'button',
    displayText: 'Submit',
  });

// 等到浏览器的load事件触发后,把由这3个新创建的对象所表示的DOM元素添加至当前页面

window.addEventListener(
  'load',
  function() {
    var bodyElement = document.body;
    bodyElement.appendChild(textField.getElement());
    bodyElement.appendChild(emailField.getElement());
    bodyElement.appendChild(buttonField.getElement());
  },
  false
);
```

当需要在代码的其余所有部分通过屏蔽较为复杂的对象创建方法来简化某些特定独享的创建过程时,使用工厂模式最合适不过了的

### 抽象工厂模式

抽象工场模式比之前使用的工场模式又更进了一步,如果应用程序需要,它可以创建出一个额外的抽象层,根据共同的用途或主题来一起创建出多个工厂

将两个工厂作为一个新的工厂类型的实例来对待,这两个工厂享有相似的行为

```js
// 定义一个基础工厂"类",创建表单域,其他更明确的表单域创建工厂类将继承于此类
function FormFieldFactory() {
  // 定义所支持的表单域类型的清单,它们将会应用于所有的继承于此类的表单域工厂类
  this.availableTypes = {
    TEXT: 'text',
    EMAIL: 'email',
    BUTTON: 'button',
  };
}

FormFieldFactory.prototype = {
  // 定义makeField()方法,它将被各个子类利用多态性进行重写,因此,该方法不应该在此父类中直接调用
  // 如果出现这种情况,则抛出一个错误
  makeField: function() {
    throw new Error('This method should not be called directoly');
  },
};

// 定义一个工厂类,继承于基础工厂类,利用HTML5表单域的创建
function Html5FormFieldFactory() {
  Html5FormFieldFactory.prototype = new FormFieldFactory();

  // 针对此工厂使用明确的代码来重写makeField方法
  Html5FormFieldFactory.prototype.makeField = function() {
    var options = options || {},
      type = options.type || this.availableTypes.TEXT,
      displayText = options.displayText || '',
      field;

    // 基于所提供的options,选择最合适的域类型
    switch (type) {
      case this.availableTypes.TEXT:
        field = new Html5TextField(displayText);
        break;
      case this.availableTypes.EMAIL:
        field = new Html5EmailField(displayText);
        break;
      case this.availableTypes.BUTTON:
        field = new ButtonField(displayText);
        break;
      default:
        throw new Error('Invalid field type specified' + type);
    }
    return field;
  };
}

// 定义一个工厂类,它也继承于相同的基础工厂类,用于老式HTML4表单域的创建
function Html4FormFieldFactory() {
  html4FormFieldFactory.prototype = new FormFieldFactory();
  // 针对此工厂,使用明确的代码来重写makeField()方法
  html4FormFieldFactory.prototype.makeField = function(options) {
    var options = options || {},
      type = options.type || this.availableTypes.TEXT,
      displayText = options.displayText || '',
      field;

    switch (type) {
      case this.availableTypes.TEXT:
      case this.availableTypes.EMAIL:
        field = new Html4TextField(displayText);
        break;
      case this.availableTypes.BUTTON:
        field = new ButtonField(displayText);
        break;
      default:
        throw new Error('Invalid field type specified' + type);
    }
    return field;
  };
}

// 定义各项表单域,用于创建各种HTML5和HTML4表单元素
function Html5TextField(displayText) {
  this.displayText = displayText || '';
}

Html5TextField.prototype.getElement = function() {
  var textField = document.createElement('input');
  textField.setAttribute('type', 'text');
  textField.setAttribute('placeholder', this.displayText);

  return textField;
};

// 因为HTML4并不支持placeholder标签特性,作为代替,我们将创建并返回一个div元素,当中包含文本域
// 和一个相关联的包含着的placeholder文本的label
function Html4TextField(displayText) {
  this.displayText = displayText || '';
}

Html4TextField.prototype.getElement = function() {
  var wrapper = document.createElement('div'),
    textField = document.createElement('input'),
    textFieldId = 'text-field-' + Math.floor(Math.random() * 999),
    label = document.createElement('label'),
    labelText = document.createTextNode(this.displayText);

  textField.setAttribute('type', 'text');
  textField.setAttribute('id', textFieldId);

  // 使用label的for标签特性与input的id标签特性把给label与该input相关联
  label.setAttribute('for', textFieldId);

  // 使用label的for标签特性与Input的id标签特性把该label与该input相关联
  label.appendChild(label);

  return wrapper;
};

function Html5EmailField(displayText) {
  this.displayText = displayText;
}

Html5EmailField.prototype.getElement = function() {
  var emailField = document.createElement('input');
  emailField.setAttribute('type', 'email');
  emailField.setAttribute('placeholder', this.displayText);

  return emailField;
};

// 定义按钮表单元素,此元素在HTML5和HTML4表单域类型中是一致的,因此并需要两个单独的类,在以后
// 如果还需要创建一个不同的HTML5版本的表单按钮,我们只需要根据变化情况更新相关的工场类即可
// 而整个应用程序中其他的代码将会相应的做出调整
function ButtonField(displayText) {
  this.displayText = displayText;
}

ButtonField.prototype.getElement = function() {
  var button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.innerHTML = this.displayText;
  return button;
};
```

### 使用抽象工厂模式

```js
// 确认浏览器是否支持HTML5，并选择合适的表单域工厂
var supportsHtml5FormFields = (function() {
  // 此自执行函数尝试创建一个HTML5表单域类型的元素input type=emial
  var field = document.createElment('input');
  field.setAttribute('type', 'email');
  // 如果该新表单域返回了正确的类型,那就代表它已经被正确的创建了,也就代表着浏览器支持html5
  return field.type === 'email';
})();

// 利用上述变量所返回的值来选择合适的表单域的创建工厂类并使用该类创建一个实例
(formFieldFactory = supportsHtml5FormFields
  ? new Html5FormFieldFactory()
  : new Html4FormFieldFactory()),
  // 使用该工厂来创建一个文本框表单域,一个Email表单域和一个提交按钮,此时,我们已经根据当前浏览器的情况使用了最合适的域表单类型和标签属性来进行创建了
  (textField = formFieldFactory.makeField({
    type: 'text',
    displayText: 'Enter the first line of your address',
  })),
  (emailField = formFieldFacory.makeField({
    type: 'email',
    displayText: 'Enter your email address',
  }));

// 如何利用含有工厂的类,所支持的域类型清单的availableTypes属性而不是使用硬编码的
// 文本字符串来设定表单域类型的,推荐使用这种方法,因为使用变量要优先于使用硬编码值
buttonField = formFieldFactory.makeField({
  type: formFieldFactory.availableTypes.BUTTON,
  displayText: 'Submit',
});

window.addEventListner(
  'load',
  function() {
    var bodyElement = document.body;

    // 使用每个对象的getElenent()方法来获取对它的DOM元素添加当前页面
    bodyElement.appendChild(emailField.getElement());
    bodyElement.appendChild(emailField.getElement());
    bodyElement.appendChild(buttonField.getELement());
  },
  false
);
```

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
