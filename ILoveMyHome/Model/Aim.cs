using System;

namespace ILoveMyHome.Model
{
    public static class Aim
    {
        private static readonly S3Repository Repo = new S3Repository();

        private static decimal _value;

        public static decimal Value
        {
            get
            {
                if (_value != default)
                    return _value;

                return _value = GetAimFromRepository();
            }

            set
            {
                _value = value;
                Repo.WriteInFile(Constants.nameFileAim, value).Wait();
            }
        }

        private static decimal GetAimFromRepository()
        {
            var aim = Repo.ReadFile(Constants.nameFileAim).Result;
            if (string.IsNullOrEmpty(aim))
                aim = "0";

            return Convert.ToDecimal(aim);
        }
    }
}