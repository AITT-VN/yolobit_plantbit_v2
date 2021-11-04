// Cảm biến độ ẩm đất
Blockly.Blocks['plantbit_soil_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_soil_sensor",
        "message0": "đọc độ ẩm đất (%%) %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ]
            ]
          }
        ],
        "output": "Number",
        "colour": "#009900",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['plantbit_soil_sensor'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'round(translate(('+dropdown_name+'.read_analog()), 0, 4095, 0, 100))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// Cảm biến ánh sáng
Blockly.Blocks['plantbit_light_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_light_sensor",
        "message0": "đọc độ sáng ngoài trời (%%) %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ]
            ]
          }
        ],
        "output": "Number",
        "colour": "#009900",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['plantbit_light_sensor'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'round(translate(('+dropdown_name+'.read_analog()), 0, 4095, 0, 100))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["plantbit_dht_create"] = {
 
  init: function() {
    this.jsonInit({
      type: "plantbit_dht_create",
      message0: Blockly.Msg.BLOCK_DHT_CREATE_MESSAGE0 ,
      args0: [
        {
          type: "field_variable",
          name: "dht_sensor",
          variable: Blockly.Msg.BLOCK_DHT_CREATE_MESSAGE1
        },
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"],
            ["P3", "pin3"],
            ["P4", "pin4"],
            ["P5", "pin5"],
            ["P6", "pin6"],
            ["P7", "pin7"],
            ["P7", "pin2"],
            ["P10", "pin10"],
            ["P11", "pin11"],
            ["P12", "pin12"], 
            ["P13", "pin13"],
            ["P14", "pin14"],
            ["P15", "pin15"],
            ["P16", "pin16"],
            ["P19", "pin19"],
            ["P20", "pin20"]
          ]
        }
      ],
      inputsInline: false,
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: Blockly.Msg.BLOCK_DHT_CREATE_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_DHT_CREATE_HELPURL
    });
  }
};

Blockly.Blocks["plantbit_dht_measure"] = {
  init: function() {
    this.jsonInit({
      message0: Blockly.Msg.BLOCK_DHT_MEANSURE_MESSAGE0,
      args0: [
      {
        type: "field_variable",
        name: "dht_sensor",
        variable: Blockly.Msg.BLOCK_DHT_MEANSURE_MESSAGE1
      }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: Blockly.Msg.BLOCK_DHT_MEANSURE_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_DHT_MEANSURE_HELPURL
    });
  }
};

Blockly.Blocks["plantbit_dht_read"] = {
  init: function() {
    this.jsonInit({
      message0: Blockly.Msg.BLOCK_DHT_READ_MESSAGE0,
      args0: [
        {
          type: "field_dropdown",
          name: "DATA",
          options: [
            [Blockly.Msg.BLOCK_DHT_READ_MESSAGE1, "TEMP"],
            [Blockly.Msg.BLOCK_DHT_READ_MESSAGE2, "HUMID"]
          ]
        },
        {
          type: "field_variable",
          name: "dht_sensor",
          variable: Blockly.Msg.BLOCK_DHT_READ_MESSAGE3
        }
      ],
      output: null,
      colour: 120,
      tooltip: Blockly.Msg.BLOCK_DHT_READ_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_DHT_READ_HELPURL
    });
  }
};


Blockly.Python["plantbit_dht_create"] = function(block) {
  var variable_dht = Blockly.Python.variableDB_.getName(block.getFieldValue('dht_sensor'), Blockly.Variables.NAME_TYPE);
  var dropdown_port = block.getFieldValue("port");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  Blockly.Python.definitions_["import_time"] = "import time";
  Blockly.Python.definitions_["import_dht"] = "import dht";
  var code =  variable_dht + " = dht.DHT11" + "(Pin(" + dropdown_port + ".pin))\n";
  return code;
};

Blockly.Python["plantbit_dht_measure"] = function(block) {
  var variable_dht = Blockly.Python.variableDB_.getName(block.getFieldValue('dht_sensor'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_dht + ".measure()\n";
  return code;
};

Blockly.Python["plantbit_dht_read"] = function(block) {
  var dropdown_data = block.getFieldValue("DATA");
  var variable_dht = Blockly.Python.variableDB_.getName(block.getFieldValue('dht_sensor'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = "";
  if (dropdown_data == "TEMP")
    code = variable_dht + ".temperature()";
  else 
    code = variable_dht + ".humidity()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['plantbit_ultrasonic_create'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_ultrasonic_create",
        "message0": Blockly.Msg.ULTRASONIC_CREATE_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TRG",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "ECH",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#009900",
        "tooltip": Blockly.Msg.ULTRASONIC_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.ULTRASONIC_CREATE_HELPURL
      }
    );
  }
};

Blockly.Python['plantbit_ultrasonic_create'] = function(block) {
  var dropdown_trg = block.getFieldValue('TRG');
  var dropdown_ech = block.getFieldValue('ECH');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_ultrasonic'] = 'from hcsr04 import HCSR04';
  var code = 'ultrasonic_plant_bit = HCSR04(trigger_pin=' + dropdown_trg + '.pin, echo_pin=' + dropdown_ech + '.pin)\n';
  return code;
};

Blockly.Blocks['plantbit_ultrasonic_read'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_ultrasonic_read",
        "message0": Blockly.Msg.ULTRASONIC_READ_MESSAGE0,
        "args0": [
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "cm",
                "CM"
              ],
              [
                "mm",
                "MM"
              ]
            ]
          }
        ],
        "output": null,
        "colour": "#009900",
        "tooltip": Blockly.Msg.ULTRASONIC_READ_TOOLTIP,
        "helpUrl": Blockly.Msg.ULTRASONIC_READ_HELPURL
      }
    );
  }
};

Blockly.Python['plantbit_ultrasonic_read'] = function(block) {
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_type == 'CM') {
    code = 'ultrasonic_plant_bit.distance_cm()';
  } else {
    code = 'ultrasonic_plant_bit.distance_mm()';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['plantbit_ultrasonic_checkdistance'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_ultrasonic_checkdistance",
        "message0": Blockly.Msg.ULTRASONIC_CHECK_MESSAGE0,
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "DISTANCE",
            "check": "Number"
          },
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "cm",
                "CM"
              ],
              [
                "mm",
                "MM"
              ]
            ]
          }
        ],
        "output": "Boolean",
        "colour": "#009900",
        "tooltip": Blockly.Msg.ULTRASONIC_CHECK_TOOLTIP,
        "helpUrl": Blockly.Msg.ULTRASONIC_CHECK_HELPURL
      }
    );
  }
};

Blockly.Python['plantbit_ultrasonic_checkdistance'] = function(block) {
  var value_distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_type == 'CM')
    code = 'ultrasonic_plant_bit.distance_cm() < ' + value_distance;
  else
    code = 'ultrasonic_plant_bit.distance_mm()' + value_distance;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['plantbit_ultrasonic_checkwater'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_ultrasonic_checkwater",
        "message0": "lượng nước trong bể chứa (%%) , với mức A: %1 cm, mức B: %2 cm" ,
        "args0": [
          {
            "type": "input_value",
            "name": "A"
          },
          {
            "type": "input_value",
            "name": "B"
          }
        ],
        "output": "Number",
        "colour": "#009900",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['plantbit_ultrasonic_checkwater'] = function(block) {
  var number_min = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
  var number_max = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '100 - round(translate((ultrasonic_plant_bit.distance_cm()), '+number_min+', '+number_max+', 0, 100))';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['plantbit_oled_create'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_oled_create",
        "message0": Blockly.Msg.OLED_CREATE_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "oled_lcd",
            "variable": Blockly.Msg.OLED_CREATE_MESSAGE1,
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#009900",
        "tooltip": Blockly.Msg.OLED_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.OLED_CREATE_HELPURL
      }
    );
  }
};

Blockly.Python['plantbit_oled_create'] = function(block) {
  var variable_oled_lcd = Blockly.Python.variableDB_.getName(block.getFieldValue('oled_lcd'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, I2C';
  Blockly.Python.definitions_['import_oled'] = 'from ssd1306 import SSD1306_I2C';
  // oled = SSD1306_I2C(oled_width, oled_height, i2c)
  var code = variable_oled_lcd + ' = SSD1306_I2C( 128, 64 , I2C(-1, scl=Pin(22), sda=Pin(21)))\n';
  return code;
};

Blockly.Blocks['plantbit_oled_text'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_oled_text",
        "message0": Blockly.Msg.OLED_TEXT_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "oled_lcd",
            "variable": Blockly.Msg.OLED_TEXT_MESSAGE1,
          },
          {
            "type": "input_value",
            "name": "TEXT"
          },
          {
            "type": "input_value",
            "name": "X"
          },
          {
            "type": "input_value",
            "name": "Y"
          },
          {
            "type": "input_dummy"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#009900",
        "tooltip": Blockly.Msg.OLED_TEXT_TOOLTIP,
        "helpUrl": Blockly.Msg.OLED_TEXT_HELPURL
      }
    );
  }
};

Blockly.Python['plantbit_oled_text'] = function(block) {
  var variable_oled_lcd = Blockly.Python.variableDB_.getName(block.getFieldValue('oled_lcd'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  //oled.text('Hello, World 1!', 0, 0, col); oled.show()
  var code = variable_oled_lcd + '.text(str(' + value_text + '), ' + value_x + ', ' + value_y + ', 1); ' + variable_oled_lcd + '.show()\n';
  return code;
};

Blockly.Blocks['plantbit_oled_fill'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_oled_fill",
        "message0": Blockly.Msg.OLED_FILL_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "oled_lcd",
            "variable": Blockly.Msg.OLED_FILL_MESSAGE1,
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#009900",
        "tooltip": Blockly.Msg.OLED_FILL_TOOLTIP,
        "helpUrl": Blockly.Msg.OLED_FILL_HELPURL
      }
    );
  }
};

Blockly.Python['plantbit_oled_fill'] = function(block) {
  var variable_oled_lcd = Blockly.Python.variableDB_.getName(block.getFieldValue('oled_lcd'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  //oled.fill(1); oled.show()
  var code = variable_oled_lcd + '.fill(0); ' + variable_oled_lcd + '.show()\n';
  return code;
};

Blockly.Blocks['plantbit_dual_usb_1'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_dual_usb_1",
        "message0": "bật máy bơm ở chân %1 ở mức (1-100) %2 %%",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "percent",
            "check": "Number"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#009900",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['plantbit_dual_usb_1'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  var value_percent = Blockly.Python.valueToCode(block, 'percent', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ''+dropdown_name+'.write_analog(round(translate('+value_percent+', 0, 100, 0, 4095)))\n';
  return code;
};

Blockly.Blocks['plantbit_dual_usb_2'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "plantbit_dual_usb_2",
        "message0": "bật đèn LED màu ở chân %1 ở mức (1-100) %2 %%",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "percent",
            "check": "Number"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#009900",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['plantbit_dual_usb_2'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('NAME');
  var value_percent = Blockly.Python.valueToCode(block, 'percent', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = ''+dropdown_name+'.write_analog(round(translate('+value_percent+', 0, 100, 0, 4095)))\n';
  return code;
};