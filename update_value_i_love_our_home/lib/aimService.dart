import 'package:http/http.dart';
export 'dart:async';

class AimService{
  static final String server = 'https://iloveourhome.azurewebsites.net';
  static final String url = '${server}/api/HowMuchIsMissing';

  static Future<Response> getValueHowMuchIsMissing() =>
      get(url);

  static Future<Response> updateValueHowMuchIsMissing(double value) =>
      post('$url/$value');
}