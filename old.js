Blockly.Blocks["block_sound"] = {
  init: function() {
    this.jsonInit({
      type: "block_sound",
      message0: Blockly.Msg.BLOCK_SOUND_MESSAGE0,
      args0: [
        {
          type: "field_dropdown",
          name: "NAME",
          options: [
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"]
          ]
        }
      ],
      output: null,
      colour: 180,
      tooltip: Blockly.Msg.BLOCK_SOUND_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_SOUND_HELPURL
    });
  }
};
Blockly.Python["block_sound"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  var dropdown_name = block.getFieldValue("NAME");
  // TODO: Assemble Python into code variable.
  var code = dropdown_name + ".read_analog()>1000";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["block_flipped"] = {
  init: function() {
    this.jsonInit({
      type: "block_flipped",
      message0: Blockly.Msg.BLOCK_FLIPPED_MESSAGE0,
      args0: [
        {
          type: "field_dropdown",
          name: "action",
          options: [
            [Blockly.Msg.BLOCK_FLIPPED_MESSAGE1, "1"],
            [Blockly.Msg.BLOCK_FLIPPED_MESSAGE2, "0"],
            [Blockly.Msg.BLOCK_FLIPPED_MESSAGE3, "3"]
          ]
        },
        {
          type: "field_dropdown",
          name: "NAME",
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
            ["P19", "pin19"],
            ["P20", "pin20"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 180,
      tooltip: Blockly.Msg.BLOCK_FLIPPED_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_FLIPPED_HELPURL
    });
  }
};

Blockly.Python["block_flipped"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  var dropdown_action = block.getFieldValue("action");
  var dropdown_name = block.getFieldValue("NAME");
  
  // TODO: Assemble Python into code variable.
  var code;
  if (dropdown_action == 3)
    code = dropdown_name+".write_digital(1-"+dropdown_name+".read_digital())\n";
  else
    code = dropdown_name+".write_digital("+dropdown_action+")\n";
  return code;
};

Blockly.Blocks["block_rotary"] = {
  init: function() {
    this.jsonInit({
      type: "block_rotary",
      message0: Blockly.Msg.BLOCK_ROTARY_MESSAGE0 ,
      args0: [
        {
          type: "field_dropdown",
          name: "NAME",
          options: [
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"]
          ]
        }
      ],
      output: null,
      colour: 180,
      tooltip: Blockly.Msg.BLOCK_ROTARY_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_ROTARY_HELPURL
    });
  }
};

Blockly.Python["block_rotary"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  var dropdown_name = block.getFieldValue("NAME");
  // TODO: Assemble Python into code variable.
  var code = "translate(" + dropdown_name + ".read_analog(), 0, 4095, 0, 100)"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["block_light_sensor"] = {
  init: function() {
    this.jsonInit({
      type: "block_light_sensor",
      message0: Blockly.Msg.LIGHT_SENSOR_MESSAGE0 ,
      args0: [
        {
          type: "field_dropdown",
          name: "NAME",
          options: [
            ["P0", "pin0"],
            ["P1", "pin1"],
            ["P2", "pin2"]
          ]
        }
      ],
      output: null,
      colour: 180,
      tooltip: Blockly.Msg.LIGHT_SENSOR_TOOLTIP,
      helpUrl: Blockly.Msg.LIGHT_SENSOR_HELPURL
    });
  }
};

Blockly.Python["block_light_sensor"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  var dropdown_name = block.getFieldValue("NAME");
  // TODO: Assemble Python into code variable.
  var code = "translate(" + dropdown_name + ".read_analog(), 0, 4095, 0, 100)"
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["block_motor"] = {
  init: function() {
    this.jsonInit({
      type: "block_motor",
      message0: Blockly.Msg.BLOCK_MOTOR_MESSAGE0,
      args0: [
        {
          type: "field_dropdown",
          name: "action",
          options: [
            [Blockly.Msg.BLOCK_MOTOR_MESSAGE1, "1"],
            [Blockly.Msg.BLOCK_MOTOR_MESSAGE2, "0"]
          ]
        },
        {
          type: "field_dropdown",
          name: "NAME",
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
      previousStatement: null,
      nextStatement: null,
      colour: 180,
      tooltip: Blockly.Msg.BLOCK_MOTOR_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_MOTOR_HELPURL
    });
  }
};

Blockly.Python["block_motor"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  var dropdown_action = block.getFieldValue("action");
  var dropdown_name = block.getFieldValue("NAME");
  // TODO: Assemble Python into code variable.
  var code = dropdown_name + ".write_digital((" + dropdown_action + "))\n";
  return code;
};

Blockly.Blocks["block_dht_create"] = {
 
  init: function() {
    this.jsonInit({
      type: "block_dht_create",
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
      colour: 180,
      tooltip: Blockly.Msg.BLOCK_DHT_CREATE_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_DHT_CREATE_HELPURL
    });
  }
};

Blockly.Blocks["block_dht_measure"] = {
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
      colour: 180,
      tooltip: Blockly.Msg.BLOCK_DHT_MEANSURE_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_DHT_MEANSURE_HELPURL
    });
  }
};

Blockly.Blocks["block_dht_read"] = {
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
      colour: 180,
      tooltip: Blockly.Msg.BLOCK_DHT_READ_TOOLTIP,
      helpUrl: Blockly.Msg.BLOCK_DHT_READ_HELPURL
    });
  }
};


Blockly.Python["block_dht_create"] = function(block) {
  var variable_dht = Blockly.Python.variableDB_.getName(block.getFieldValue('dht_sensor'), Blockly.Variables.NAME_TYPE);
  var dropdown_port = block.getFieldValue("port");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  Blockly.Python.definitions_["import_time"] = "import time";
  Blockly.Python.definitions_["import_dht"] = "import dht";
  var code =  variable_dht + " = dht.DHT11" + "(Pin(" + dropdown_port + ".pin))\n";
  return code;
};

Blockly.Python["block_dht_measure"] = function(block) {
  var variable_dht = Blockly.Python.variableDB_.getName(block.getFieldValue('dht_sensor'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_dht + ".measure()\n";
  return code;
};

Blockly.Python["block_dht_read"] = function(block) {
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

Blockly.Blocks["block_checkkeypad"] = {
  init: function() {
    this.jsonInit({
      "type": "block_checkkeypad",
      "message0": Blockly.Msg.BLOCK_CHECKKEYPAD_MESSAGE0,
      "output": null,
      "colour": 180,
      "tooltip": Blockly.Msg.BLOCK_CHECKKEYPAD_TOOLTIP,
      "helpUrl": Blockly.Msg.BLOCK_CHECKKEYPAD_HELPURL
    });
  }
};

Blockly.Python["block_checkkeypad"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  Blockly.Python.definitions_["import_i2c"] = "from machine import Pin, I2C";
  Blockly.Python.definitions_["import_mpr121"] = "from keypad121 import MPR121";
  Blockly.Python.definitions_["import_keypad"] = "keypad_homebit = MPR121(I2C(-1, scl=Pin(22), sda=Pin(21)))";
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_["import_keypad_keys_pressed"] = "keys_pressed = ''";
  var code ="keypad_homebit.check_keypad()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["block_readkeys"] = {
  init: function() {
    this.jsonInit({
      "type": "block_readkeys",
      "message0": Blockly.Msg.BLOCK_READKEYS_MESSAGE0,
      "inputsInline": true,
      "output": null,
      "colour": 180,
      "tooltip": Blockly.Msg.BLOCK_READKEYS_TOOLTIP,
      "helpUrl": Blockly.Msg.BLOCK_READKEYS_HELPURL
    });
  }
};

Blockly.Python['block_readkeys'] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  Blockly.Python.definitions_["import_i2c"] = "from machine import Pin, I2C";
  Blockly.Python.definitions_["import_mpr121"] = "from keypad121 import MPR121";
  Blockly.Python.definitions_["import_keypad"] = "keypad_homebit = MPR121(I2C(-1, scl=Pin(22), sda=Pin(21)))";
  // TODO: Assemble Python into code variable.
  var code = 'keys_pressed';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["block_savekeys"] = {
  init: function() {
    this.jsonInit({
      "type": "block_clearlistkey",
      "message0": Blockly.Msg.BLOCK_SAVEKEYS_MESSAGE0,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": Blockly.Msg.BLOCK_SAVEKEYS_TOOLTIP,
      "helpUrl": Blockly.Msg.BLOCK_SAVEKEYS_HELPURL
    });
  }
};

Blockly.Python['block_savekeys'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'keys_pressed += keypad_homebit.check_keypad()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks["block_clearkeys"] = {
  init: function() {
    this.jsonInit({
      "type": "block_clearlistkey",
      "message0": Blockly.Msg.BLOCK_CLEARKEYS_MESSAGE0,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": Blockly.Msg.BLOCK_CLEARKEYS_TOOLTIP,
      "helpUrl": Blockly.Msg.BLOCK_CLEARKEYS_HELPURL
    });
  }
};

Blockly.Python['block_clearkeys'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'keys_pressed = ""\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


Blockly.Blocks['homebit_ultrasonic_create'] = {
  /**
   * Block for waiting.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "type": "homebit_ultrasonic_create",
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
        "colour": 180,
        "tooltip": Blockly.Msg.ULTRASONIC_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.ULTRASONIC_CREATE_HELPURL
      }
    );
  }
};

Blockly.Python['homebit_ultrasonic_create'] = function(block) {
  var dropdown_trg = block.getFieldValue('TRG');
  var dropdown_ech = block.getFieldValue('ECH');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_ultrasonic'] = 'from hcsr04 import HCSR04';
  var code = 'ultrasonic_home_bit = HCSR04(trigger_pin=' + dropdown_trg + '.pin, echo_pin=' + dropdown_ech + '.pin)\n';
  return code;
};

Blockly.Blocks['homebit_ultrasonic_read'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "homebit_ultrasonic_read",
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
        "colour": 180,
        "tooltip": Blockly.Msg.ULTRASONIC_READ_TOOLTIP,
        "helpUrl": Blockly.Msg.ULTRASONIC_READ_HELPURL
      }
    );
  }
};

Blockly.Python['homebit_ultrasonic_read'] = function(block) {
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_type == 'CM') {
    code = 'ultrasonic_home_bit.distance_cm()';
  } else {
    code = 'ultrasonic_home_bit.distance_mm()';
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['homebit_ultrasonic_checkdistance'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "homebit_ultrasonic_checkdistance",
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
        "colour": 180,
        "tooltip": Blockly.Msg.ULTRASONIC_CHECK_TOOLTIP,
        "helpUrl": Blockly.Msg.ULTRASONIC_CHECK_HELPURL
      }
    );
  }
};

Blockly.Python['homebit_ultrasonic_checkdistance'] = function(block) {
  var value_distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '';
  if (dropdown_type == 'CM')
    code = 'ultrasonic_home_bit.distance_cm() < ' + value_distance;
  else
    code = 'ultrasonic_home_bit.distance_mm()' + value_distance;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['oled_create'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "oled_create",
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
        "colour": 180,
        "tooltip": Blockly.Msg.OLED_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.OLED_CREATE_HELPURL
      }
    );
  }
};

Blockly.Python['oled_create'] = function(block) {
  var variable_oled_lcd = Blockly.Python.variableDB_.getName(block.getFieldValue('oled_lcd'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, I2C';
  Blockly.Python.definitions_['import_oled'] = 'from ssd1306 import SSD1306_I2C';
  // oled = SSD1306_I2C(oled_width, oled_height, i2c)
  var code = variable_oled_lcd + ' = SSD1306_I2C( 128, 64 , I2C(-1, scl=Pin(22), sda=Pin(21)))\n';
  return code;
};

Blockly.Blocks['oled_text'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "oled_text",
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
        "colour": 180,
        "tooltip": Blockly.Msg.OLED_TEXT_TOOLTIP,
        "helpUrl": Blockly.Msg.OLED_TEXT_HELPURL
      }
    );
  }
};

Blockly.Python['oled_text'] = function(block) {
  var variable_oled_lcd = Blockly.Python.variableDB_.getName(block.getFieldValue('oled_lcd'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  //oled.text('Hello, World 1!', 0, 0, col); oled.show()
  var code = variable_oled_lcd + '.text(str(' + value_text + '), ' + value_x + ', ' + value_y + ', 1); ' + variable_oled_lcd + '.show()\n';
  return code;
};

Blockly.Blocks['oled_fill'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "oled_fill",
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
        "colour": 180,
        "tooltip": Blockly.Msg.OLED_FILL_TOOLTIP,
        "helpUrl": Blockly.Msg.OLED_FILL_HELPURL
      }
    );
  }
};

Blockly.Python['oled_fill'] = function(block) {
  var variable_oled_lcd = Blockly.Python.variableDB_.getName(block.getFieldValue('oled_lcd'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  //oled.fill(1); oled.show()
  var code = variable_oled_lcd + '.fill(0); ' + variable_oled_lcd + '.show()\n';
  return code;
};