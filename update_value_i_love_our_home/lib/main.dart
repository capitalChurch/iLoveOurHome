import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:intl/intl.dart';

import 'CurrencyInputFormatter.dart';
import 'aimService.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Atualizar Valor Eu Amo Nossa Casa',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Eu Amo nossa casa'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

typedef void CleanCallBack();

class _MyHomePageState extends State<MyHomePage> {
  final currencyFormat = new NumberFormat("#,##0.00", "pt_BR");
  final TextEditingController control = TextEditingController();
  bool _isLoading = false;
  double _missingValue = 31222;

  _updateValue() {
    var text = control.text.replaceAll('.', '');
    text = text.replaceAll(',', '.');
    var value = double.tryParse(text) ?? 0;

    setState(() => _isLoading = true);
    AimService.updateValueHowMuchIsMissing(value).then((res) {
      if (res.statusCode != 200) {
        Scaffold.of(context).showSnackBar(SnackBar(
            content: Text('Error on updating value'),
            backgroundColor: Colors.red));
        return;
      }

      getValue(() => control.text = '');
    });
  }

  void getValue([CleanCallBack callback]) {
    AimService.getValueHowMuchIsMissing().then((res) {
      setState(() => _isLoading = true);

      if (res.statusCode != 200) {
        Scaffold.of(context).showSnackBar(SnackBar(
            content: Text('Error on getting the value'),
            backgroundColor: Colors.red));
        return;
      }

      var value = double.tryParse(res.body) ?? 0;
      setState(() => _missingValue = value);
      callback();
    });
  }

  @override
  void initState() {
    super.initState();
    getValue();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[
            Container(
              child: Column(
                children: <Widget>[
                  Text(
                    'O valor faltante atual é de',
                  ),
                  Text(
                    'R\$ ${currencyFormat.format(_missingValue)}',
                    style: Theme.of(context).textTheme.display1,
                  ),
                ],
              ),
            ),
            Container(
                child: Column(
              children: <Widget>[
                Text('Atualizar para o valor'),
                Container(
                    child: Padding(
                  padding: const EdgeInsets.only(left: 38.0, right: 38.0),
                  child: TextField(
                    decoration: InputDecoration(
                        labelText: 'Novo valor',
                      prefix: Padding(
                        padding: const EdgeInsets.only(right: 8.0),
                        child: Text('R\$'),
                      )
                    ),
                    keyboardType:
                        TextInputType.numberWithOptions(decimal: true),
                    controller: control,
                    onSubmitted: (text) => _updateValue(),
                    textInputAction: TextInputAction.send,
                    inputFormatters: [
                      WhitelistingTextInputFormatter.digitsOnly,
                      CurrencyInputFormatter()
                    ],
                  ),
                ))
              ],
            ))
          ],
        ),
      ),
    );
  }
}
